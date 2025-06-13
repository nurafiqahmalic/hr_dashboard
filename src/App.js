import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';
import SchedulePage from './components/SchedulePage';
import JobPage from './components/JobPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/job" element={<JobPage />} />

        <Route path="/" element={<LoginPage />} />
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
