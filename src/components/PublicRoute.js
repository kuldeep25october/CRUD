import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const PublicRoute = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [tokenData, setTokenData] = useState(token);

  if (tokenData) {
    return <Navigate to="/usersTable" />;
  } else {
    return <Login setTokenData={setTokenData} />;
  }
};

export default PublicRoute;
