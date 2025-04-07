import React from "react";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import NavigationComponent from "../components/Navigation/Navigation.component";

const MainView = () => {
  return (
    <Grid
      className="main-container"
      justifyContent="center"
      sx={{ minHeight: "100vh", width: "100vw", margin: 0, padding: "0" }}
    >
      <NavigationComponent onClickBackButton={() => {}} />
      <Outlet />
    </Grid>
  );
};

export default MainView;
