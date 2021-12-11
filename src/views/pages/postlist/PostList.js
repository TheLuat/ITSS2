import React, { useEffect, useState } from "react";
import axiosCLient from "src/axios/axiosClient";

const fetcher = axiosCLient();
const PostList = () => {
  const [data, setData] = useState([]);

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
          <th className="">#</th>
          <th>ブランド</th>
          <th>タイトル</th>
          <th></th>
        </tr>
        <thead className="thead-light"></thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr>
                <td className="text-left" style={{}}>
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
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        削除
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
