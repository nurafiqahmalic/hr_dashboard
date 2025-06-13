import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineCog,
} from 'react-icons/hi';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-[#2D336B] text-white transition-all duration-300 p-4 space-y-6`}
    >
      {/* Hamburger Menu Button */}
      <button onClick={toggleSidebar} className="text-white text-xl">
        {sidebarOpen ? 'Close' : '☰'}
      </button>

      {/* Sidebar Menu Items */}
      <div className="mt-8 space-y-4">
        <Link
          to="/dashboard"
          className="block text-xl flex items-center space-x-2"
        >
          <HiOutlineHome />
          {sidebarOpen && <span>Dashboard</span>}
        </Link>

        <Link
          to="/schedule"
          className="block text-xl flex items-center space-x-2"
        >
          <HiOutlineCalendar />
          {sidebarOpen && <span>Schedule</span>}
        </Link>

        <Link to="/job" className="block text-xl flex items-center space-x-2">
          <HiOutlineBriefcase />
          {sidebarOpen && <span>Job Opening</span>}
        </Link>

        <Link
          to="/candidates"
          className="block text-xl flex items-center space-x-2"
        >
          <HiOutlineUsers />
          {sidebarOpen && <span>Candidates</span>}
        </Link>

        <Link
          to="/employee"
          className="block text-xl flex items-center space-x-2"
        >
          <HiOutlineUser />
          {sidebarOpen && <span>Employee</span>}
        </Link>

        <Link
          to="/settings"
          className="block text-xl flex items-center space-x-2"
        >
          <HiOutlineCog />
          {sidebarOpen && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
