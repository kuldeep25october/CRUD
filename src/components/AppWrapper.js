import { Layout } from "antd";
import React from "react";
import Login from "./Login";
import UsersTable from "./UsersTable";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import SignUp from "./SignUp";

const AppWrapper = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<PublicRoute component={Login} />} />

          <Route
            path="/usersTable"
            element={<PrivateRoute component={UsersTable} />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default AppWrapper;
