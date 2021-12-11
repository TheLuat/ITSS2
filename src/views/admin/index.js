import React, { useState, useEffect } from "react";
import "./style.css";
import axiosCLient from "src/axios/axiosClient";
import InputForm from "./inputForm/index";
import { Button } from "react-bootstrap";
const fetcher = axiosCLient();

const Admin = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState({});

  useEffect(() => getData(), []);

  const getData = async () => {
    try {
      const res = await fetcher.get(
        "http://dev1.solashi.com:8001/api/v1/admins"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderInputForm = () => {
    if (showForm) {
      return (
        <InputForm clickShowForm={clickShowForm} addUser={addUser}></InputForm>
      );
    } else {
      return (
        <>
          <Button className="btn btn-info" onClick={clickShowForm}>
            Add User
          </Button>
        </>
      );
    }
  };
  //open-close form
  const clickShowForm = () => {
    setShowForm(!showForm);
  };

  const handleEditClick = (admin) => {
    setEditingUser(admin);
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetcher.post(
        `http://dev1.solashi.com:8001/api/v1/brands/reject/${id}`
      );
      await getData();
      alert("新規登録のリクエストを削除しました");
    } catch (error) {
      alert("新規登録のリクエストを削除はエラーになりました");
      console.log(error);
    }
  };

  const addUser = async (data) => {
    try {
      const res = await fetcher.post(
        "http://dev1.solashi.com:8001/api/v1/admins",
        data
      );
      await getData();
      setShowForm(!showForm);
      alert("Add user success");
    } catch (error) {
      console.log(error);
      setShowForm(!showForm);
      alert("Add user fail");
    }
  };

  const saveButtonClick = async () => {
    const { name, email, id } = editingUser;
    try {
      const res = await fetcher.put(
        `http://dev1.solashi.com:8001/api/v1/admins/${id}`,
        { name, email }
      );
      await getData();
      alert("Edit user success");
    } catch (error) {
      console.log(error);
      alert("Edit user fail");
    }
  };

  const onEditUserFormChange = (event) => {
    setEditingUser({ ...editingUser, [event.target.name]: event.target.value });
  };
  return (
    <div class="container">
      {/* Modal edit user */}
      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <h3>Edit User</h3>
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
                  placeholder="New name"
                  value={editingUser.name}
                  onChange={onEditUserFormChange}
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
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="New email"
                  value={editingUser.email}
                  onChange={onEditUserFormChange}
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-5">
                <button className="btn btn-primary" onClick={saveButtonClick}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---END MODAL EDIT USER--- */}

      {renderInputForm()}
      {/* ---Show list user--- */}
      <table class="table table-bordered table-hover">
        <caption>List of admins</caption>
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((admin, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-labeled btn-warning mr-2"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  onClick={() => handleEditClick(admin)}
                >
                  <span class="btn-label d-inline-block mr-2 px-2">
                    <i class="fa fa-trash"></i>
                  </span>
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-labeled btn-danger"
                  onClick={() => handleDelete(admin)}
                >
                  <span class="btn-label d-inline-block mr-2 px-2">
                    <i class="fa fa-remove"></i>
                  </span>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
