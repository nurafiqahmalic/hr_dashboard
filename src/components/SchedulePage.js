import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SchedulePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [toDoList, setToDoList] = useState([
    { task: 'Follow up with candidate', completed: false },
    { task: 'Prepare onboarding materials', completed: false },
    { task: 'Schedule interview with candidate', completed: false },
    { task: 'Send offer letter', completed: false },
  ]);

  // Store tasks by date using an object
  const [onboardingTasks, setOnboardingTasks] = useState({
    '2025-06-13': [
      {
        task: 'HR policies and benefits discussion',
        assignedTo: 'adina@test.com',
        dueDate: '2025-06-13',
        status: 'Pending', // Default status
      },
      {
        task: 'KUL EST team meeting',
        assignedTo: 'bob@test.com',
        dueDate: '2025-06-13',
        status: 'Pending', // Default status
      },
    ],
    '2025-06-17': [
      {
        task: 'Office tour for new hires',
        assignedTo: 'john@test.com',
        dueDate: '2025-06-17',
        status: 'Pending', // Default status
      },
      {
        task: 'HR policies and benefits discussion',
        assignedTo: 'mary@test.com',
        dueDate: '2025-06-17',
        status: 'Pending', // Default status
      },
    ],
  });

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTaskCompletion = (index) => {
    const updatedList = [...toDoList];
    updatedList[index].completed = !updatedList[index].completed;
    setToDoList(updatedList);
  };

  // Format the selected date to 'yyyy-mm-dd' for easy comparison
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Filter the onboarding tasks based on the selected date
  const selectedDate = formatDate(date);
  const filteredTasks = onboardingTasks[selectedDate] || [];

  // Handle dropdown change
  const handleStatusChange = (index, status) => {
    const updatedTasks = [...filteredTasks];
    updatedTasks[index].status = status;
    const updatedOnboardingTasks = { ...onboardingTasks, [selectedDate]: updatedTasks };
    setOnboardingTasks(updatedOnboardingTasks);
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
          {/* Calendar Section */}
          <div className="bg-white p-6 shadow-md rounded-lg col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold text-[#605EA1] mb-2">Calendar</h2>
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
              {toDoList.map((task, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schedule Table Section */}
        <div className="bg-white p-6 shadow-md rounded-lg col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-[#605EA1]">Onboarding Tasks</h2>
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500">No tasks for this day.</p>
          ) : (
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
                {filteredTasks.map((task, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-6">{task.task}</td>
                    <td className="py-3 px-6">{task.assignedTo}</td>
                    <td className="py-3 px-6">{task.dueDate}</td>
                    <td className="py-3 px-6">
                      {/* Dropdown for status */}
                      <select
                        value={task.status}
                        onChange={(e) => handleStatusChange(index, e.target.value)}
                        className={`py-1 px-3 rounded-full ${task.status === 'Pending' ? 'bg-yellow-100 text-yellow-500' : 'bg-green-100 text-green-500'}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Done">Done</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
