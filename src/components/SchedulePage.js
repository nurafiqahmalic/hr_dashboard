import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SchedulePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">Schedule</h1>

        {/* Schedule Content */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          {/* Calendar Section (Make this larger than the TODO reminder) */}
          <div className="bg-white p-6 shadow-md rounded-lg col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold text-[#605EA1] mb-2">Calendar</h2>
            {/* Flex container for centering the calendar */}
            <div className="flex justify-center items-center">
              <Calendar
                onChange={setDate}
                value={date}
                className="react-calendar"
              />
            </div>
          </div>

          {/* TODO Reminder Section */}
          <div className="bg-white p-6 shadow-md rounded-lg col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold text-[#605EA1] mb-2">To Do Reminder</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>Follow up with candidate</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>Follow up with candidate</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>Follow up with candidate</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>Follow up with candidate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Schedule Table Section */}
        <div className="bg-white p-6 shadow-md rounded-lg col-span-2 lg:col-span-1">
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

export default SchedulePage;
