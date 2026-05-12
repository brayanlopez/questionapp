import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  alpha,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { DrawerComponent } from "./Drawer.component";

import { menuItems } from "./navigation.common";
import { useColorMode } from "../../utils/ThemeContext";

const NavigationComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: alpha(theme.palette.divider, 0.6),
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          px: { xs: 1, sm: 2 },
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        <DrawerComponent
          open={open}
          toggleDrawer={toggleDrawer}
          menuItems={menuItems}
        />

        <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Typography variant="h6" fontWeight={700} noWrap>
            QuestionApp
          </Typography>
        </Box>

        <IconButton color="inherit" onClick={toggleColorMode} sx={{ ml: 1 }}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationComponent;
