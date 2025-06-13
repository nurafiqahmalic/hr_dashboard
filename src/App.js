import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes for login, register, and dashboard */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Redirect to login if route does not match */}
        <Route path="/" element={<LoginPage />} />

        {/* Optional: Error page for undefined routes */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-xl text-red-500">Page Not Found</h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
