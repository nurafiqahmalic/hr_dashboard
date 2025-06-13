import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineUsers,
} from 'react-icons/hi';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">
          HR Dashboard
        </h1>
        <p className="text-lg mb-4">Hi Mock User! </p>

        {/* Add the layout for your 4 containers, graph, and table */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Total Job Openings</h2>
            <div className="flex items-center mt-2">
              <HiOutlineBriefcase className="text-5xl text-white" />
              <p className="ml-4 text-3xl font-semibold text-white">4</p>
            </div>
          </div>

         <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Applications Today</h2>
            <div className="flex items-center mt-2">
              <HiOutlineDocumentText className="text-5xl text-white" />
              <p className="ml-4 text-3xl font-semibold text-white">18</p>
            </div>
          </div>

         <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Interviews Scheduled</h2>
            <div className="flex items-center mt-2">
              <HiOutlineCalendar className="text-5xl text-white" />
              <p className="ml-4 text-3xl font-semibold text-white">4</p>
            </div>
          </div>

           <div className="bg-[#605EA1] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">Employees Onboarding</h2>
            <div className="flex items-center mt-2">
              <HiOutlineUsers className="text-5xl text-white" />
              <p className="ml-4 text-3xl font-semibold text-white">2</p>
            </div>
          </div>
        </div>

        {/* Second line: Graph and Table */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Graph goes here */}
            <h2 className="text-xl font-semibold">Interview Status</h2>
            <div className="h-64 bg-gray-200">Graph Placeholder</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Table goes here */}
            <h2 className="text-xl font-semibold">Candidates Match</h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Software Engineer</td>
                  <td>87%</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>Software Engineer</td>
                  <td>90%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Full table for Onboarding */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Onboarding</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th>Task</th>
                <th>Assigned to</th>
                <th>Due date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Briefing and meeting with newcomers</td>
                <td>adina@test.com</td>
                <td>2nd May 2025</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Briefing and meeting with newcomers</td>
                <td>adina@test.com</td>
                <td>2nd May 2025</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
