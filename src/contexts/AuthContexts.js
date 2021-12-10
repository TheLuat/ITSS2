import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AuthReducer } from "src/reducers/AuthReducer";
import { apiUrl } from "./constants";
import setAuthToken from "./../ultils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //login
  const loginUser = async (formData) => {
    try {
      const response = await axios.post(`${apiUrl}user/login`, formData);
      if (response.data.success) {
        localStorage.setItem("access_token", response.data.access_token);
      }
      await loadUser();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //authenticate user
  const loadUser = async () => {
    if (localStorage["access_token"]) {
      setAuthToken(localStorage["access_token"]);
    }

    try {
      const response = await axios.get(`${apiUrl}user/me`);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: response.data },
        });
      }
    } catch (error) {
      localStorage.removeItem("access_token");
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => loadUser(), []);

  //logout user
  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };
  
  //context data
  const authContextData = { loginUser, logout, authState };

  //return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
