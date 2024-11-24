import React, { useState } from "react";
import Modal from "./Modal";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "User", status: "Inactive" },
  ]);
  const [modalData, setModalData] = useState(null);

  const handleAddUser = () => {
    setModalData({ id: null, name: "", role: "", status: "Active" });
  };

  const handleEditUser = (user) => {
    setModalData(user);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSave = (data) => {
    if (data.id) {
      setUsers(users.map((user) => (user.id === data.id ? data : user)));
    } else {
      setUsers([...users, { ...data, id: Date.now() }]);
    }
    setModalData(null);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {modalData && <Modal data={modalData} onSave={handleSave} onClose={() => setModalData(null)} />}
    </div>
  );
};

export default UserList;
