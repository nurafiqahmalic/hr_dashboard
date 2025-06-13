import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import { useLocation } from 'react-router-dom';
import { HiPencil, HiTrash, HiPlus } from 'react-icons/hi';

const JobPage = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    jobTitle: '',
    department: '',
    datePosted: '',
    status: 'OPEN',
  });
  const [jobData, setJobData] = useState([
    {
      jobTitle: 'Software Engineer',
      department: 'Engineering',
      datePosted: 'Apr 1, 2025',
      status: 'OPEN',
    },
    {
      jobTitle: 'Product Designer',
      department: 'Design',
      datePosted: 'Mar 24, 2025',
      status: 'OPEN',
    },
    {
      jobTitle: 'Marketing Specialist',
      department: 'Marketing',
      datePosted: 'Jan 2, 2025',
      status: 'CLOSED',
    },
    {
      jobTitle: 'IT Intern',
      department: 'IT',
      datePosted: 'Oct 23, 2024',
      status: 'CLOSED',
    },
  ]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewJob({
      jobTitle: '',
      department: '',
      datePosted: '',
      status: 'OPEN',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJobData([...jobData, newJob]);
    closeModal();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'OPEN':
        return 'bg-green-100 text-green-500';
      case 'CLOSED':
        return 'bg-red-100 text-red-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
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
          Job Openings
        </h1>

        {/* Job Openings Table */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#605EA1] mb-4">
              Available Job Openings
            </h2>
            <button
              onClick={openModal}
              className="bg-[#605EA1] text-white py-2 px-4 rounded-full flex items-center"
            >
              <HiPlus className="mr-2" />
              New Job Opening
            </button>
          </div>
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-200 text-[#605EA1]">
              <tr>
                <th className="py-3 px-6 text-left">Job Title</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Date Posted</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobData.map((job, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-6">{job.jobTitle}</td>
                  <td className="py-3 px-6">{job.department}</td>
                  <td className="py-3 px-6">{job.datePosted}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`inline-block py-1 px-3 rounded-full text-sm font-semibold ${getStatusClass(job.status)}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <button className="inline-block mr-2 py-2 px-4 rounded-full bg-[#605EA1] text-white font-semibold">
                      <HiPencil className="inline-block" />
                    </button>
                    <button className="inline-block py-2 px-4 rounded-full bg-red-500 text-white font-semibold">
                      <HiTrash className="inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for New Job Opening */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-[#605EA1] mb-6">
              Create New Job Opening
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  value={newJob.jobTitle}
                  onChange={(e) =>
                    setNewJob({ ...newJob, jobTitle: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Department
                </label>
                <input
                  type="text"
                  value={newJob.department}
                  onChange={(e) =>
                    setNewJob({ ...newJob, department: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Date Posted
                </label>
                <input
                  type="date"
                  value={newJob.datePosted}
                  onChange={(e) =>
                    setNewJob({ ...newJob, datePosted: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Status
                </label>
                <select
                  value={newJob.status}
                  onChange={(e) =>
                    setNewJob({ ...newJob, status: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="OPEN">Open</option>
                  <option value="CLOSED">Closed</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-4 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#605EA1] text-white py-2 px-4 rounded"
                >
                  Save Job Opening
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
