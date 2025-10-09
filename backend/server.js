const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/form-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schemas
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  bio: String,
  avatar: String,
  preferences: {
    aiAssistant: { type: Boolean, default: true },
    autoSuggestions: { type: Boolean, default: true },
    smartValidation: { type: Boolean, default: true },
    formOptimization: { type: Boolean, default: true },
    language: { type: String, default: 'en' },
    creativity: { type: String, default: 'balanced' },
    responseTime: { type: String, default: 'fast' },
    theme: { type: String, default: 'light' },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: false },
      frequency: { type: String, default: 'immediate' }
    }
  },
  createdAt: { type: Date, default: Date.now }
});

const FormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  fields: [{
    id: String,
    type: String,
    label: String,
    placeholder: String,
    required: Boolean,
    validation: Object,
    options: Array,
    order: Number
  }],
  status: { type: String, enum: ['draft', 'active', 'paused'], default: 'draft' },
  settings: {
    theme: Object,
    notifications: Boolean,
    analytics: Boolean
  },
  responses: { type: Number, default: 0 },
  completionRate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  data: Object,
  completed: { type: Boolean, default: false },
  ipAddress: String,
  userAgent: String,
  completionTime: Number,
  createdAt: { type: Date, default: Date.now }
});

const TemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  fields: Array,
  rating: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const ActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  action: String,
  target: String,
  metadata: Object,
  createdAt: { type: Date, default: Date.now }
});

// Models
const User = mongoose.model('User', UserSchema);
const Form = mongoose.model('Form', FormSchema);
const Response = mongoose.model('Response', ResponseSchema);
const Template = mongoose.model('Template', TemplateSchema);
const Activity = mongoose.model('Activity', ActivitySchema);

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    await user.save();

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    res.status(201).json({ token, user: { id: user._id, email, firstName, lastName } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        email: user.email, 
        firstName: user.firstName, 
        lastName: user.lastName 
      } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// User Profile Routes
app.get('/api/users/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/users/profile', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Form Routes
app.get('/api/forms', authenticateToken, async (req, res) => {
  try {
    const forms = await Form.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/forms/:id', authenticateToken, async (req, res) => {
  try {
    const form = await Form.findOne({ _id: req.params.id, userId: req.user.id });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/forms', authenticateToken, async (req, res) => {
  try {
    const form = new Form({
      ...req.body,
      userId: req.user.id
    });
    await form.save();

    // Log activity
    await Activity.create({
      userId: req.user.id,
      type: 'form_created',
      action: 'created a new form',
      target: form.name
    });

    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/forms/:id', authenticateToken, async (req, res) => {
  try {
    const form = await Form.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: { ...req.body, updatedAt: Date.now() } },
      { new: true }
    );
    
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    // Log activity
    await Activity.create({
      userId: req.user.id,
      type: 'form_updated',
      action: 'updated',
      target: form.name
    });

    res.json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.delete('/api/forms/:id', authenticateToken, async (req, res) => {
  try {
    const form = await Form.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Response Routes
app.post('/api/forms/:id/responses', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const response = new Response({
      formId: req.params.id,
      data: req.body.data,
      completed: req.body.completed,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      completionTime: req.body.completionTime
    });

    await response.save();

    // Update form response count
    await Form.findByIdAndUpdate(req.params.id, {
      $inc: { responses: 1 }
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/forms/:id/responses', authenticateToken, async (req, res) => {
  try {
    const form = await Form.findOne({ _id: req.params.id, userId: req.user.id });
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const responses = await Response.find({ formId: req.params.id }).sort({ createdAt: -1 });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Template Routes
app.get('/api/templates', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    if (category && category !== 'All Categories') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const templates = await Template.find(query).sort({ downloads: -1 });
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/templates/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    res.json(template);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Analytics Routes
app.get('/api/analytics/dashboard', authenticateToken, async (req, res) => {
  try {
    const totalForms = await Form.countDocuments({ userId: req.user.id });
    const forms = await Form.find({ userId: req.user.id });
    const totalResponses = forms.reduce((sum, form) => sum + form.responses, 0);
    
    const avgCompletionRate = forms.length > 0
      ? forms.reduce((sum, form) => sum + form.completionRate, 0) / forms.length
      : 0;

    res.json({
      totalForms,
      totalResponses,
      avgCompletionRate: Math.round(avgCompletionRate),
      activeForms: forms.filter(f => f.status === 'active').length
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Activity Feed Routes
app.get('/api/activities', authenticateToken, async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(20);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// AI Assistant Routes (Mock for now)
app.post('/api/ai/suggest', authenticateToken, async (req, res) => {
  try {
    const { message, context } = req.body;
    
    // Mock AI response
    const suggestions = [
      {
        type: 'field',
        suggestion: 'Add an email validation field',
        confidence: 0.95
      },
      {
        type: 'validation',
        suggestion: 'Consider adding phone number validation',
        confidence: 0.87
      }
    ];

    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});