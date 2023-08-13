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
// import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HandymanIcon from "@mui/icons-material/Handyman";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const NavigationComponent = ({ onClickBackButton }) => {
  const navigate = useNavigate();

  const settings = [
    { icon: <DarkModeIcon />, text: "Modo nocturno" },
    { icon: <ColorLensIcon />, text: "Seleccionar paleta" },
    { icon: <HelpCenterIcon />, text: "Ayuda" },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* TODO: implement menu button for more functionalities to future */}
          {/* <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            <Link
              to={`/questionapp/`}
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
            onClick={() => navigate("/questionapp/info")}
          >
            <HandymanIcon />
          </IconButton>
        </Toolbar>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          // anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={false}
          // onClose={handleCloseUserMenu}
        >
          {settings.map((setting, index) => (
            <MenuItem key={index}>
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
