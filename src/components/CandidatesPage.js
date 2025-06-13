import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { HiPencil, HiTrash, HiPlus } from 'react-icons/hi';

const CandidatesPage = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [candidateToEdit, setCandidateToEdit] = useState(null);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    position: '',
    status: 'Screening',
  });

  const [candidateData, setCandidateData] = useState([
    {
      name: 'John Doe',
      position: 'Sales Specialist',
      status: 'Screening',
    },
    {
      name: 'Ahmad Abu',
      position: 'IT Intern',
      status: 'Interview',
    },
    {
      name: 'Nur Alia',
      position: 'IT Intern',
      status: 'Rejected',
    },
    {
      name: 'Alice',
      position: 'Software Engineer',
      status: 'Offer',
    },
    {
      name: 'Adina',
      position: 'Sales Specialist',
      status: 'Interview',
    },
  ]);

  const openEditModal = (candidate) => {
    setCandidateToEdit(candidate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCandidateToEdit(null);
    setNewCandidate({
      name: '',
      position: '',
      status: 'Screening',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (candidateToEdit) {
      // Edit existing candidate
      setCandidateData(
        candidateData.map((candidate) =>
          candidate.name === candidateToEdit.name ? candidateToEdit : candidate
        )
      );
    } else {
      // Add new candidate
      setCandidateData([...candidateData, newCandidate]);
    }
    closeModal();
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Screening':
        return 'bg-blue-100 text-blue-500';
      case 'Interview':
        return 'bg-yellow-100 text-yellow-500';
      case 'Rejected':
        return 'bg-red-100 text-red-500';
      case 'Offer':
        return 'bg-green-100 text-green-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">Candidates</h1>
        {/* Candidates Table */}
        <div className="bg-white p-6 shadow-md rounded-lg">
                  <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#605EA1] mb-4">Candidate List</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#605EA1] text-white py-2 px-4 rounded-full flex items-center"
          >
            <HiPlus className="mr-2" />
            New Candidate
          </button>
        </div>
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-200 text-[#605EA1]">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidateData.map((candidate, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-6">{candidate.name}</td>
                  <td className="py-3 px-6">{candidate.position}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`inline-block py-1 px-3 rounded-full text-sm font-semibold ${getStatusClass(candidate.status)}`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => openEditModal(candidate)}
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

      {/* Modal for Editing / Adding Candidate */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-[#605EA1] mb-6">
              {candidateToEdit ? 'Edit Candidate' : 'Add New Candidate'}
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  value={candidateToEdit ? candidateToEdit.name : newCandidate.name}
                  onChange={(e) =>
                    candidateToEdit
                      ? setCandidateToEdit({ ...candidateToEdit, name: e.target.value })
                      : setNewCandidate({ ...newCandidate, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Position</label>
                <input
                  type="text"
                  value={candidateToEdit ? candidateToEdit.position : newCandidate.position}
                  onChange={(e) =>
                    candidateToEdit
                      ? setCandidateToEdit({ ...candidateToEdit, position: e.target.value })
                      : setNewCandidate({ ...newCandidate, position: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Status</label>
                <select
                  value={candidateToEdit ? candidateToEdit.status : newCandidate.status}
                  onChange={(e) =>
                    candidateToEdit
                      ? setCandidateToEdit({ ...candidateToEdit, status: e.target.value })
                      : setNewCandidate({ ...newCandidate, status: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Screening">Screening</option>
                  <option value="Interview">Interview</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Offer">Offer</option>
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
                  {candidateToEdit ? 'Save Changes' : 'Add Candidate'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatesPage;
