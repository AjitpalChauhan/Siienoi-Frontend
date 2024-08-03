// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Authenticated, selectLoggedInUser } from '../../slice/Auth/authSlice';


function ProtectedRoute({ children }) {
  const user = useSelector(selectLoggedInUser)
  const auth = useSelector(Authenticated)

  console.log('isAuthenticated:', user, auth); 
 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;


