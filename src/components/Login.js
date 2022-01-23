import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setTokenData }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const authenticateUser = () => {
    const localInfo = JSON.parse(localStorage.getItem("signUpUser"));
    if (localInfo === null) {
      return false;
    } else {
      localInfo?.map((item) => {
        const userName = item.email;
        const userPassword = item.password;
        if (userName === userData.email && userPassword === userData.password) {
          console.log("success");
          const token = Math.random().toString(36).substr(2, 5);
          console.log("token is:", token);
          sessionStorage.setItem("token", JSON.stringify(token));
          setTokenData(token);
          toUsersTable();
        } else {
          console.log("failure");
          return false;
        }
      });
      setUserData(initialValues);
    }
  };

  const navigateToUsersTable = useNavigate();
  const toUsersTable = (e) => {
    e.preventDefault();
    return navigateToUsersTable("/usersTable");
  };

  return (
    <>
      <Form className="loginForm" onSubmit={() => authenticateUser()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userData.email}
            name="email"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="txtToSignUpBtn">
          <span>OR</span> <Link to="/signUp">Click here to Register</Link>
        </div>
      </Form>
    </>
  );
};
export default Login;
