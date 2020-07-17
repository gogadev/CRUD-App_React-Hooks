import React, { useState } from "react";

import Header from "./components/header/Header";
import AddUser from "./components/add-user/AddUser";
import EditUser from "./components/edit-user/EditUser";
import UserInfo from "./components/user-info/UserInfo";

import user from "./assets/user.png";

import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, name: "Teddy", username: "floppyTed" },
    { id: 2, name: "Clara", username: "tinyC" },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <React.Fragment>
      <Header />
      {editing ? (
        <React.Fragment>
          <EditUser
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AddUser addUser={addUser} />
          {users.length > 0 ? (
            <UserInfo
              users={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          ) : (
            <div className="no-users">
              <h2 className="sub-title">
                ~No Users Found, Please Add New User~
              </h2>
              <img className="no-user" src={user} alt="" />
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
