import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersTable from "./UsersTable";

const PrivateRoute = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [tokenData, setTokenData] = useState(token);

  if (tokenData) {
    return <UsersTable setTokenData={setTokenData} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
