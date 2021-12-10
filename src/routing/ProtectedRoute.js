import { Route, Redirect } from "react-router";
import { useContext } from "react";
import { AuthContext } from "src/contexts/AuthContexts";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { isAuthenticated, isLoading },
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...rest} {...props}></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        )
      }
    ></Route>
  );
};

export default ProtectedRoute;
