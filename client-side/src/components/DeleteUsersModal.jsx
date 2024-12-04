import React, { useEffect, useState } from 'react';
import axios from 'axios';
import deleteicon from '../assets/images/delete.svg';

const DeleteUsersModal = ({ id }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log('Delete modal props:', id);
  }, [id]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.delete(`http://localhost:8080/auth/admin/delete-user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Delete response:', response.data);
      alert('User deleted successfully!');
      toggleModal();
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };

  return (
    <>
      <button onClick={toggleModal}>
        <img src={deleteicon} alt="Delete" />
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>

          {/* Modal */}
          <div className="bg-white px-10 py-6 rounded-lg z-20 shadow-lg">
            <p className="font-bold text-lg text-gray-800 text-center">
              Are you sure you want to delete this user?
            </p>

            <div className="mt-6 flex justify-center items-center gap-6">
              {/* Cancel Button */}
              <button
                onClick={toggleModal}
                className="bg-bluegradient text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
              >
                Cancel
              </button>

              {/* Delete Button */}
              <button
                onClick={handleDelete}
                className="bg-[#831111] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteUsersModal;
