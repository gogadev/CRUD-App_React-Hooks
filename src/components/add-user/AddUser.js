import React, { useState } from "react";

import "./add-user.style.css";

const AddUser = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container">
      <h2 className="subtitle">Add User</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!user.name || !user.username) return;
          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
