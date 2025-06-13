import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineUsers,
} from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

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
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">
          HR Dashboard
        </h1>
        <p className="text-lg mb-4">Hi Mock User! </p>

        {/* Add the layout for your 4 containers, graph, and table */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <HiOutlineBriefcase className="text-6xl text-white" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Total Job Openings
                </h2>
                <p className="ml-2 text-3xl font-semibold text-white">4</p>
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
                <p className="ml-2 text-3xl font-semibold text-white">18</p>
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
                <p className="ml-2 text-3xl font-semibold text-white">4</p>
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
                <p className="ml-2 text-3xl font-semibold text-white">2</p>
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
            {/* Table goes here */}
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
                <tr className="border-t">
                  <td className="py-3 px-6">John Doe</td>
                  <td className="py-3 px-6">Software Engineer</td>
                  <td className="py-3 px-6">87%</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-6">Jane Doe</td>
                  <td className="py-3 px-6">Software Engineer</td>
                  <td className="py-3 px-6">90%</td>
                </tr>
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
              <tr className="border-t">
                <td className="py-3 px-6">
                  Briefing and meeting with newcomers
                </td>
                <td className="py-3 px-6">adina@test.com</td>
                <td className="py-3 px-6">2nd May 2025</td>
                <td className="py-3 px-6">-</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6">
                  Briefing and meeting with newcomers
                </td>
                <td className="py-3 px-6">adina@test.com</td>
                <td className="py-3 px-6">2nd May 2025</td>
                <td className="py-3 px-6">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
