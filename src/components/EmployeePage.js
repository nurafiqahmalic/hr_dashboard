import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import { useLocation } from 'react-router-dom';
import { HiPencil, HiTrash } from 'react-icons/hi';

const EmployeePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [employeeData, setEmployeeData] = useState([
    {
      name: 'John Doe',
      position: 'Sales Specialist',
      status: 'Active',
    },
    {
      name: 'Ahmad Abu',
      position: 'IT Intern',
      status: 'Probation',
    },
    {
      name: 'Alice',
      position: 'Software Engineer',
      status: 'Permanent',
    },
    {
      name: 'Adina',
      position: 'Sales Specialist',
      status: 'On Leave',
    },
  ]);

  const openEditModal = (employee) => {
    setEmployeeToEdit(employee);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEmployeeToEdit(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmployeeData(
      employeeData.map((emp) =>
        emp.name === employeeToEdit.name ? employeeToEdit : emp
      )
    );
    closeModal();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-500';
      case 'Probation':
        return 'bg-yellow-100 text-yellow-500';
      case 'Permanent':
        return 'bg-blue-100 text-blue-500';
      case 'On Leave':
        return 'bg-orange-100 text-orange-500';
      case 'Terminated':
        return 'bg-red-100 text-red-500';
      case 'Suspended':
        return 'bg-gray-100 text-gray-500';
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
        currentRoute={useLocation().pathname}
      />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-[#605EA1] mb-6">Employee</h1>

        {/* Employee Table Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-[#605EA1] mb-4">Employee List</h2>
          <table className="min-w-full mt-4 bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-200 text-[#605EA1]">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-6">{employee.name}</td>
                  <td className="py-3 px-6">{employee.position}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`inline-block py-1 px-3 rounded-full text-sm font-semibold ${getStatusClass(employee.status)}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => openEditModal(employee)}
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

      {/* Modal for Editing Employee */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-[#605EA1] mb-6">Edit Employee</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  value={employeeToEdit?.name || ''}
                  onChange={(e) =>
                    setEmployeeToEdit({
                      ...employeeToEdit,
                      name: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Position</label>
                <input
                  type="text"
                  value={employeeToEdit?.position || ''}
                  onChange={(e) =>
                    setEmployeeToEdit({
                      ...employeeToEdit,
                      position: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Status</label>
                <select
                  value={employeeToEdit?.status || ''}
                  onChange={(e) =>
                    setEmployeeToEdit({
                      ...employeeToEdit,
                      status: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Probation">Probation</option>
                  <option value="Permanent">Permanent</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Terminated">Terminated</option>
                  <option value="Suspended">Suspended</option>
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

export default EmployeePage;
