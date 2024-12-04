import React, { useState } from 'react';

const Permissions = () => {
  const [roles, setRoles] = useState([
    { id: 1, roleName: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, roleName: 'Editor', permissions: ['Read', 'Write'] },
    { id: 3, roleName: 'Viewer', permissions: ['Read'] },
  ]);

  const permissionsList = ['Read', 'Write', 'Delete'];

  const togglePermission = (roleId, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((perm) => perm !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  return (
    <div>
      <h1 className="text-[1.5rem] font-bold text-[#33517F] mb-6">Manage Permissions</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Role</th>
            {permissionsList.map((perm) => (
              <th key={perm} className="text-left px-4 py-2">
                {perm}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-t">
              <td className="px-4 py-2">{role.roleName}</td>
              {permissionsList.map((perm) => (
                <td key={perm} className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(perm)}
                    onChange={() => togglePermission(role.id, perm)}
                    className="cursor-pointer"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Permissions;
