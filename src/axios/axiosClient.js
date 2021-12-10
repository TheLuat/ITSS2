import axios from "axios";

const axiosCLient = () => {
  const accessToken = localStorage["access_token"];

  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return axios;
};

export default axiosCLient;
