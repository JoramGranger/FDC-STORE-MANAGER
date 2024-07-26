// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element, requiredRole, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  
  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redirect if user does not have required role
    return <Navigate to="/unauthorized" />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;