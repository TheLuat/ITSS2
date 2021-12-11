import React, { useState, useEffect } from "react";

const InputForm = (props) => {
  const { clickShowForm, addUser } = props;
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onUserFormChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const addUserClick = () => {
    addUser(userForm);
  };
  return (
    <div>
      <h2>管理者の作成</h2>

      <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">
          名前
        </label>
        <div class="col-sm-10">
          <input
            name="name"
            type="text"
            class="form-control"
            id="inputName3"
            placeholder="名前"
            value={userForm.name}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          メールアドレス
        </label>
        <div class="col-sm-10">
          <input
            name="email"
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder="メールアドレス"
            value={userForm.email}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          パスワード
        </label>
        <div class="col-sm-10">
          <input
            name="password"
            type="password"
            class="form-control"
            id="inputPassword3"
            placeholder="パスワード"
            value={userForm.password}
            onChange={onUserFormChange}
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-5">
          <button className="btn btn-primary" onClick={addUserClick}>
            作成する
          </button>
        </div>
      </div>

      <div class="col-sm-10 text-center">
        <button className="btn btn-danger center" onClick={clickShowForm}>
          フォーム閉じる
        </button>
      </div>
    </div>
  );
};

export default InputForm;
