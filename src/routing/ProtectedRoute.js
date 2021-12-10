import { Route, Redirect } from "react-router";
import { useContext } from "react";
import { AuthContext } from "src/contexts/AuthContexts";
import { Spinner } from "react-bootstrap";

function ProtectedRoute(props) {
  const { path, render } = props;
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  const renderProtectedRoute = () => {
    if (authLoading) {
      return (
        <div className="d-flex justify-content-center mt-2">
          <Spinner animation="border" variant="info"></Spinner>
        </div>
      );
    } else {
      if (!isAuthenticated) {
        return <Redirect to="/login"></Redirect>;
      } else {
        return <Route path={path} render={render}></Route>;
      }
    }
  };

  return <div>{renderProtectedRoute()}</div>;
}

export default ProtectedRoute;
