import React, { useState } from "react";

const Modal = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal">
      <h3>{data.id ? "Edit" : "Add"} Item</h3>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Role/Permissions:
        <input name="permissions" value={formData.permissions} onChange={handleChange} />
      </label>
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
