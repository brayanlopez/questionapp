import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { DrawerComponent } from "./Drawer.component";

import { menuItems } from "./navigation.common";

const NavigationComponent = ({ onClickBackButton }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <DrawerComponent
          open={open}
          toggleDrawer={toggleDrawer}
          menuItems={menuItems}
        />

        <Typography variant="h6" color="inherit" component="div">
          <Link
            to={"/"}
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            onClick={onClickBackButton}
          >
            QuestionApp
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationComponent;
