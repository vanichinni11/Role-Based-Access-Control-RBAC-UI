import React, { useState } from "react";

const Permissions = () => {
  const [permissions, setPermissions] = useState({
    Admin: ["read", "write", "delete"],
    User: ["read"],
  });

  const handlePermissionChange = (role, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: prev[role].includes(permission)
        ? prev[role].filter((p) => p !== permission)
        : [...prev[role], permission],
    }));
  };

  return (
    <div>
      <h2>Permissions Management</h2>
      {Object.keys(permissions).map((role) => (
        <div key={role}>
          <h3>{role}</h3>
          {["read", "write", "delete"].map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={permissions[role].includes(permission)}
                onChange={() => handlePermissionChange(role, permission)}
              />
              {permission}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Permissions;
