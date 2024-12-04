import React, { useState, useEffect } from "react";

const UserModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = () => {
    const newUser = { id: user ? user.id : Date.now(), name, email };
    onSave(newUser);
    onClose();
  };

  return (
    <div className="modal">
      <h2>{user ? "Edit User" : "Add User"}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UserModal;
