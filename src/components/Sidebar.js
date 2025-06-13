import { Link } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineUser,
} from 'react-icons/hi';

const Sidebar = ({ sidebarOpen, toggleSidebar, currentRoute }) => {
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
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/dashboard' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineHome />
          {sidebarOpen && <span className="font-semibold ">Dashboard</span>}
        </Link>

        <Link
          to="/schedule"
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/schedule' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineCalendar />
          {sidebarOpen && <span className="font-semibold ">Schedule</span>}
        </Link>

        <Link
          to="/job"
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/job' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineBriefcase />
          {sidebarOpen && <span className="font-semibold ">Job Opening</span>}
        </Link>

        <Link
          to="/candidates"
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/candidates' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineUsers />
          {sidebarOpen && <span className="font-semibold ">Candidates</span>}
        </Link>

        <Link
          to="/employee"
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/employee' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineUser />
          {sidebarOpen && <span className="font-semibold ">Employee</span>}
        </Link>

        {/* <Link
          to="/settings"
          className={`block text-lg flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentRoute === '/settings' ? 'bg-white text-[#2D336B]' : ''
          }`}
        >
          <HiOutlineCog />
          {sidebarOpen && <span className="font-semibold ">Settings</span>}
        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
