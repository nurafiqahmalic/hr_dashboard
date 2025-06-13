import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiLogout, // Updated to HiLogout
} from 'react-icons/hi'; // Use HiLogout instead of HiExit
import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate for redirection
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalJobOpenings] = useState(4);
  const [applicationsToday] = useState(18);
  const [interviewsScheduled] = useState(4);
  const [employeesOnboarding] = useState(2);

  const [candidates] = useState([
    { name: 'John Doe', position: 'Software Engineer', percentage: 87 },
    { name: 'Jane Doe', position: 'Software Engineer', percentage: 90 },
  ]);

  const [onboardingTasks] = useState([
    {
      task: 'Briefing and meeting with newcomers',
      assignedTo: 'adina@test.com',
      dueDate: '2nd May 2025',
    },
    {
      task: 'Office tour for new hires',
      assignedTo: 'bob@test.com',
      dueDate: '3rd May 2025',
    },
  ]);

  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate to login page

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Interviews Scheduled',
        data: [12, 19, 5, 22],
        backgroundColor: '#605EA1',
        borderColor: '#605EA1',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Interview Status Over Time',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} interviews`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Function to handle logout
  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        currentRoute={location.pathname}
      />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">HR Dashboard</h1>
        <p className="text-lg mb-4">Hi Mock User!</p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-5 right-5 p-3 bg-red-500 text-white rounded-full flex items-center justify-center"
        >
          <HiLogout className="text-sm" />
        </button>

        {/* Add the layout for your 4 containers, graph, and table */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <HiOutlineBriefcase className="text-6xl text-white" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Total Job Openings
                </h2>
                <p className="ml-2 text-3xl font-semibold text-white">
                  {totalJobOpenings}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <HiOutlineDocumentText className="text-6xl text-white" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Applications Today
                </h2>
                <p className="ml-2 text-3xl font-semibold text-white">
                  {applicationsToday}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <HiOutlineCalendar className="text-6xl text-white" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Interviews Scheduled
                </h2>
                <p className="ml-2 text-3xl font-semibold text-white">
                  {interviewsScheduled}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <HiOutlineUsers className="text-6xl text-white" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Employees Onboarding
                </h2>
                <p className="ml-2 text-3xl font-semibold text-white">
                  {employeesOnboarding}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second line: Graph and Table */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#605EA1]">
              Interview Status
            </h2>
            <div className="h-72">
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Candidates Match Table */}
            <h2 className="text-xl font-semibold text-[#605EA1]">
              Candidates Match
            </h2>
            <table className="min-w-full mt-4 bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-200 text-[#605EA1]">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Position</th>
                  <th className="py-3 px-6 text-left">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-6">{candidate.name}</td>
                    <td className="py-3 px-6">{candidate.position}</td>
                    <td className="py-3 px-6">{candidate.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Full table for Onboarding */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#605EA1]">Onboarding</h2>
          <table className="min-w-full mt-4 bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-200 text-[#605EA1]">
              <tr>
                <th className="py-3 px-6 text-left">Task</th>
                <th className="py-3 px-6 text-left">Assigned to</th>
                <th className="py-3 px-6 text-left">Due date</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {onboardingTasks.map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-6">{task.task}</td>
                  <td className="py-3 px-6">{task.assignedTo}</td>
                  <td className="py-3 px-6">{task.dueDate}</td>
                  <td className="py-3 px-6">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
