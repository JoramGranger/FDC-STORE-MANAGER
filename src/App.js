// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../src/features/auth/authSlice';
import AppRoutes from './routes/appRoutes';
import './style/dark.scss';

function App() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="app dark">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;