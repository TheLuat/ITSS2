import React, { useState, useEffect } from "react";
import "./style.css";
import axiosCLient from "src/axios/axiosClient";

const fetcher = axiosCLient();

const Brand = () => {
  const [data, setData] = useState([]);
  useEffect(() => getData(), []);

  const getData = async () => {
    try {
      const res = await fetcher.get(
        "http://dev1.solashi.com:8001/api/v1/brands"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const res = await fetcher.post(
        `http://dev1.solashi.com:8001/api/v1/brands/accept/${id}`
      );
      await getData();
      alert("新規登録のリクエストを承認しました");
    } catch (error) {
      console.log(error);
      alert("新規登録のリクエストを承認はエラーになりました");
    }
  };
  const handleReject = async (id) => {
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

  return (
    <div class="container">
      <table class="table table-bordered table-hover">
        <caption>List of requests</caption>

        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Requested day</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((brand, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{brand.name}</td>
              <td>{brand.email}</td>
              <td>{new Date(brand.created_at).toLocaleDateString("ja-JP")}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-labeled btn-success mr-2"
                  onClick={() => handleAccept(brand.id)}
                >
                  <span class="btn-label d-inline-block mr-2 px-2">
                    <i class="fa fa-check"></i>
                  </span>
                  Accept
                </button>
                <button
                  type="button"
                  class="btn btn-labeled btn-danger"
                  onClick={() => handleReject(brand.id)}
                >
                  <span class="btn-label d-inline-block mr-2 px-2">
                    <i class="fa fa-remove"></i>
                  </span>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brand;