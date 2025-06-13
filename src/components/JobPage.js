import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import { HiPencil, HiTrash } from 'react-icons/hi';

const JobPage = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [modalOpen, setModalOpen] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null); 
  const [jobData] = useState([
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

  const openEditModal = (job) => {
    setJobToEdit(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setJobToEdit(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Job:', jobToEdit);
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
        currentRoute={location.pathname}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">
          Job Openings
        </h1>

        {/* Job Openings Table */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-[#605EA1] mb-4">
            Available Job Openings
          </h2>
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
                    <button
                      onClick={() => openEditModal(job)}
                      className="inline-block mr-2 py-2 px-4 rounded-full bg-[#605EA1] text-white font-semibold"
                    >
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

      {/* Modal for Editing Job */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-[#605EA1] mb-6">
              Edit Job
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  value={jobToEdit?.jobTitle || ''}
                  onChange={(e) =>
                    setJobToEdit({ ...jobToEdit, jobTitle: e.target.value })
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
                  value={jobToEdit?.department || ''}
                  onChange={(e) =>
                    setJobToEdit({ ...jobToEdit, department: e.target.value })
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
                  value={jobToEdit?.datePosted || ''}
                  onChange={(e) =>
                    setJobToEdit({ ...jobToEdit, datePosted: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Status
                </label>
                <select
                  value={jobToEdit?.status || ''}
                  onChange={(e) =>
                    setJobToEdit({ ...jobToEdit, status: e.target.value })
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
                  Save Changes
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
