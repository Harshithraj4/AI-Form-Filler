import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
};

// Forms API
export const formsAPI = {
  getAll: () => api.get('/forms'),
  getById: (id) => api.get(`/forms/${id}`),
  create: (formData) => api.post('/forms', formData),
  update: (id, formData) => api.put(`/forms/${id}`, formData),
  delete: (id) => api.delete(`/forms/${id}`),
  getResponses: (id) => api.get(`/forms/${id}/responses`),
  submitResponse: (id, responseData) => api.post(`/forms/${id}/responses`, responseData),
};

// Templates API
export const templatesAPI = {
  getAll: (params) => api.get('/templates', { params }),
  getById: (id) => api.get(`/templates/${id}`),
};

// Analytics API
export const analyticsAPI = {
  getDashboard: () => api.get('/analytics/dashboard'),
};

// Activity API
export const activityAPI = {
  getAll: () => api.get('/activities'),
};

// AI Assistant API
export const aiAPI = {
  getSuggestions: (data) => api.post('/ai/suggest', data),
};

export default api;