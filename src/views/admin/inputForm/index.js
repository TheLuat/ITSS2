import React, { useState, useEffect } from "react";

const InputForm = (props) => {
  const { clickShowForm, addUser } = props;
  const [userForm, setUserForm] = useState({
    name: "Name",
    email: "Email",
    password: "Password",
  });

  const onUserFormChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const addUserClick = () => {
    addUser(userForm);
  };
  return (
    <div>
      <h2>Add a admin user</h2>

      <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input
            name="name"
            type="text"
            class="form-control"
            id="inputName3"
            placeholder="Name"
            value={userForm.name}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            name="email"
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder="Email"
            value={userForm.email}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            name="password"
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="Password"
            value={userForm.password}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-5">
          <button className="btn btn-primary" onClick={addUserClick}>
            Add User
          </button>
        </div>
      </div>

      <div class="col-sm-10 text-center">
        <button className="btn btn-danger center" onClick={clickShowForm}>
          Close Form
        </button>
      </div>
    </div>
  );
};

export default InputForm;
