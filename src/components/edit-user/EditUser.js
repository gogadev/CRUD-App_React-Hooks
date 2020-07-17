import React, { useState, useEffect } from "react";

import editImg from "../../assets/pen.png";

import "./edit-user.style.css";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <div className="container">
      <h2 className="subtitle">Edit User</h2>
      <div className="edit-image">
        {" "}
        <img className="edit-img" src={editImg} alt="" />
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          props.updateUser(user.id, user);
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
          Update User
        </button>
        <button className="btn" onClick={() => props.setEditing(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
