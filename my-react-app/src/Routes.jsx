import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import FormAnalytics from './pages/form-analytics';
import DashboardOverview from './pages/dashboard-overview';
import AIFormBuilder from './pages/ai-form-builder';
import FormTemplatesLibrary from './pages/form-templates-library';
import SmartFormInterface from './pages/smart-form-interface';
import UserProfileSettings from './pages/user-profile-settings';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute><DashboardOverview /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardOverview /></ProtectedRoute>} />
      <Route path="/form-builder" element={<ProtectedRoute><AIFormBuilder /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><FormAnalytics /></ProtectedRoute>} />
      <Route path="/templates" element={<ProtectedRoute><FormTemplatesLibrary /></ProtectedRoute>} />
      <Route path="/smart-forms" element={<ProtectedRoute><SmartFormInterface /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><UserProfileSettings /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
