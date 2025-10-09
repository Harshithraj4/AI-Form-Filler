import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import FormAnalytics from './pages/form-analytics';
import DashboardOverview from './pages/dashboard-overview';
import AIFormBuilder from './pages/ai-form-builder';
import FormTemplatesLibrary from './pages/form-templates-library';
import SmartFormInterface from './pages/smart-form-interface';
import UserProfileSettings from './pages/user-profile-settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardOverview />} />
      <Route path="/dashboard" element={<DashboardOverview />} />
      <Route path="/form-builder" element={<AIFormBuilder />} />
      <Route path="/analytics" element={<FormAnalytics />} />
      <Route path="/templates" element={<FormTemplatesLibrary />} />
      <Route path="/smart-forms" element={<SmartFormInterface />} />
      <Route path="/profile" element={<UserProfileSettings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
