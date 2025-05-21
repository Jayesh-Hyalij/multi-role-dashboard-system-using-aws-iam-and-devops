import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './dashboards/AdminDashboard';
import StaffDashboard from './dashboards/StaffDashboard';
import StudentDashboard from './dashboards/StudentDashboard';

function App() {
  // For now, simple role-based redirect after login simulation
  // In real app, use auth context or redux to manage auth state

  const isAuthenticated = false; // placeholder
  const userRole = null; // 'admin' | 'staff' | 'student'

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'staff':
      return <StaffDashboard />;
    case 'student':
      return <StudentDashboard />;
    default:
      return <Navigate to="/" />;
  }
}

export default App;
