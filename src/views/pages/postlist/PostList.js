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
          <th>タイトル</th>
          <th>画像</th>
          <th>ブランド</th>
          <th>カテゴリー</th>
          <th>コンテンツ</th>
          <th></th>
        </tr>
        <thead className="thead-light"></thead>
        <tbody>
          {data?.data?.map((item, index) => {
            return (
              <tr>
                <td className="text-left" style={{ width: "100px" }}>
                  <div className="c-avatar">{index + 1}</div>
                </td>
                <td style={{ width: "150px" }}>
                  <div>{item.title}</div>
                </td>
                <td>
                  <img
                    src={`http://dev1.solashi.com:8001/storage/${item.img_url}`}
                    alt="anh minh hoa"
                    style={{ width: "200px", height: "150px" }}
                  />
                </td>
                <td>{item?.brand?.name}</td>
                <td>{item?.product_category?.name}</td>
                <td
                  style={{
                    width: "300px",
                    overflowX: "auto",
                    wordBreak: "break-all",
                  }}
                >
                  {item?.content}
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
