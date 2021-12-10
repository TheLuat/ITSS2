import React from "react";
import TheSidebar from "./TheSidebar";
import { TheContent, TheFooter, TheHeader } from "./index";

import { Route, Redirect } from "react-router";
import { useContext } from "react";
import { AuthContext } from "src/contexts/AuthContexts";

const TheLayout = () => {
  const {
    authState: { isAuthenticated, isLoading },
  } = useContext(AuthContext);

  const renderDasboard = () => {
    if (isAuthenticated) {
      return (
        <div className="c-app c-default-layout">
          <TheSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body">
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </div>
      );
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  };

  return <>{renderDasboard()}</>;
};

export default TheLayout;
