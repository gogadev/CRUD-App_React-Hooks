import React from "react";

import "./user-info.style.css";

const UserInfo = ({ users, deleteUser, editUser }) => {
  return (
    <div className="user-info">
      {users &&
        users.map((user) => {
          return (
            <div key={user.id} className="user">
              <ul className="list">
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
              </ul>
              <div className="buttons">
                <button
                  className="btn button"
                  onClick={() => {
                    editUser(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserInfo;
