import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { DrawerComponent } from "./Drawer.component";

import { menuItems } from "./navigation.common";
import { useColorMode } from "../../utils/ThemeContext";

const NavigationComponent = ({
  onClickBackButton,
}: {
  onClickBackButton: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        sx={{
          pr: "24px",
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

        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
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

        <IconButton color="inherit" onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationComponent;
