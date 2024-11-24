import React, { useState } from "react";
import Modal from "./Modal";

const RoleList = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "User", permissions: ["read"] },
  ]);
  const [modalData, setModalData] = useState(null);

  const handleAddRole = () => {
    setModalData({ id: null, name: "", permissions: [] });
  };

  const handleEditRole = (role) => {
    setModalData(role);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSave = (data) => {
    if (data.id) {
      setRoles(roles.map((role) => (role.id === data.id ? data : role)));
    } else {
      setRoles([...roles, { ...data, id: Date.now() }]);
    }
    setModalData(null);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - {role.permissions.join(", ")}
            <button onClick={() => handleEditRole(role)}>Edit</button>
            <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {modalData && <Modal data={modalData} onSave={handleSave} onClose={() => setModalData(null)} />}
    </div>
  );
};

export default RoleList;
