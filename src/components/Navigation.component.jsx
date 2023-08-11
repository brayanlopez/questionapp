import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const NavigationComponent = ({ onClickBackButton }) => {
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
          <DarkModeIcon />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationComponent;
