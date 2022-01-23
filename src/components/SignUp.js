import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialValues);

  const addUser = (e) => {
    e.preventDefault();
    let oldItems = [];
    const oldData = JSON.parse(localStorage.getItem("signUpUser"));
    if (oldData) {
      if (userData.password === userData.confirmPassword) {
        oldItems = [...oldData, userData];
        alert("SignUp Successfully.");
      } else {
        alert("You must Re-enter the same password");
        return false;
      }
    } else {
      if (userData.password === userData.confirmPassword) {
        oldItems.push(userData);
        alert("SignUp Successfully.");
      } else {
        alert("You must Re-enter the same password");
        return false;
      }
    }
    localStorage.setItem("signUpUser", JSON.stringify(oldItems));

    setUserData(initialValues);
  };

  const navigate = useNavigate();
  const toLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Form className="loginForm">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Your name"
            value={userData.name}
            name="name"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            value={userData.email}
            name="email"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Your username"
            value={userData.username}
            name="username"
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <Button
          className="signUpBtn"
          variant="primary"
          type="submit"
          onClick={(e) => addUser(e)}
        >
          Sign Up
        </Button>
        <Button variant="primary" type="submit" onClick={(e) => toLogin(e)}>
          Back to Login
        </Button>
      </Form>
    </>
  );
};
export default SignUp;
