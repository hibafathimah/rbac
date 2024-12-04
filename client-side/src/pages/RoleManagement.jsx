import React, { useState, useEffect } from 'react';
import axios from '../mockApi';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');
  const [error, setError] = useState('');

  // Fetch roles from mock API
  const fetchRoles = async () => {
    try {
      const response = await axios.get('/roles');
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Add a new role
  const addRole = async () => {
    if (!newRole) {
      setError('Role name is required');
      return;
    }
    try {
      await axios.post('/roles', { roleName: newRole });
      setNewRole('');
      fetchRoles();
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  // Delete a role
  const deleteRole = async (id) => {
    try {
      await axios.delete(`/roles/${id}`);
      fetchRoles();
    } catch (error) {
      console.error('Error deleting role:', error);
    }
  };

  return (
    <div>
      <h1 className="text-[1.5rem] font-bold text-[#33517F] mb-6">Role Management</h1>
      <div>
        <input
          type="text"
          placeholder="Role Name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addRole} className="bg-blue-500 text-white px-4 py-2">
          Add Role
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <ul className="mt-4">
        {roles.map((role) => (
          <li key={role.id} className="border p-2 mb-2 flex justify-between">
            <span>{role.roleName}</span>
            <button
              onClick={() => deleteRole(role.id)}
              className="bg-red-500 text-white px-4 py-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
