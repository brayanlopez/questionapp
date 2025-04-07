import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import HandymanIcon from "@mui/icons-material/Handyman";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import { DrawerComponent } from "./Drawer.component";

import { INfORMATION_ROUTE } from "../../utils/routes";

import { menuItems } from "./navigation.common";

const NavigationComponent = ({ onClickBackButton }) => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const settings = [
    // { icon: <DarkModeIcon />, text: "Modo nocturno" },
    // { icon: <ColorLensIcon />, text: "Seleccionar paleta" },
    {
      icon: <HelpCenterIcon />,
      text: "Ayuda",
      onClick: () => navigate(INfORMATION_ROUTE),
    },
  ];

  const handleCloseUserMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
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
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            sx={{ color: "white", p: 0 }}
            onClick={() => setIsOpenMenu(true)}
          >
            <HandymanIcon />
          </IconButton>
        </Toolbar>

        <Menu
          id="menu-appbar"
          sx={{ mt: "45px" }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isOpenMenu}
          onClose={handleCloseUserMenu}
          keepMounted
        >
          {settings.map((setting, index) => (
            <MenuItem key={index} onClick={setting.onClick}>
              {setting.icon}
              <Typography>{setting.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </>
  );
};

export default NavigationComponent;
