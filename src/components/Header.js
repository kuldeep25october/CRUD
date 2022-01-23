import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = ({ showModal, handleLogout }) => {
  return (
    <>
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="https://picsum.photos/40" alt="logo" />
            </Typography>
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <div className="text-center">
          <Button className="addUserBtn" onClick={() => showModal()}>
            Add User
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
