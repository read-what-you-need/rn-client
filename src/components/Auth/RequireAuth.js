import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import userApi from "../../api/user";

const RequireAuth = ({ children, redirectTo }) => {
  const [isUserAuth, setIsUserAuth] = useState("loading");
  useEffect(() => {
    userApi.isUserAuth().then(res => {
      console.log(res);
      setIsUserAuth(res);
    });
  }, []);
  console.log(`i am in private route: user auth status: ${isUserAuth}`);
  if (isUserAuth === "loading") {
    return <div>loading ...</div>;
  } else {
    return isUserAuth ? children : <Navigate to={redirectTo} />;
  }
};

export default RequireAuth;
