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
        <caption>新規登録のリクエストの一覧</caption>

        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">名前</th>
            <th scope="col">メールアドレス</th>
            <th scope="col">ロゴ</th>
            <th scope="col">分野</th>
            <th scope="col">新規登録の日</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {data?.data?.map((brand, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{brand.name}</td>
              <td>{brand.email}</td>
              <td>
                <img
                  src={`http://dev1.solashi.com:8001/storage/${brand?.logo_path}`}
                  alt="logo"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{brand?.category?.name}</td>
              <td>{new Date(brand.created_at).toLocaleDateString("ja-JP")}</td>
              <td>
                {brand.is_active ? (
                  ""
                ) : (
                  <>
                    <button
                      type="button"
                      class="btn btn-labeled btn-success mr-2"
                      onClick={() => handleAccept(brand.id)}
                    >
                      承認
                    </button>
                    <button
                      type="button"
                      class="btn btn-labeled btn-danger"
                      onClick={() => handleReject(brand.id)}
                    >
                      拒絶
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brand;
