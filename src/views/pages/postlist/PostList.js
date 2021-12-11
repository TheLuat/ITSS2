import React, { useEffect, useState } from "react";
import axiosCLient from "src/axios/axiosClient";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const fetcher = axiosCLient();
const PostList = () => {
  const [data, setData] = useState([]);
  const [list, updateList] = useState(data);

  useEffect(() => getData(), []);
  const getData = async () => {
    try {
      const res = await fetcher.get(
        "http://dev1.solashi.com:8001/api/v1/posts"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveItem = async (id) => {
    window.confirm("このポストを削除したいですか?");
    try {
      const res = await fetcher.delete(
        `http://dev1.solashi.com:8001/api/v1/posts/${id}`
      );
      await getData();
      alert("ポストを削除しました");
    } catch (error) {
      alert("ポストを削除はエラーになりました");
      console.log(error);
    }
  };

  return (
    <div className="c-body">
      <table className="table table-hover table-outline mb-0 d-none d-sm-table">
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
        <thead className="thead-light"></thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td className="text-center" style={{ width: "10%" }}>
                  <div className="c-avatar">{item.id}</div>
                </td>
                <td style={{ width: "10%" }}>
                  <div>{item.user_id}</div>
                </td>
                <td style={{ width: "70%" }}>
                  <div>{item.title}</div>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
