import { Grid } from "@mui/material";
import NavigationComponent from "../components/Navigation.component";
import PageView from "./page.view";

const MainView = () => {
  return (
    <Grid
      className="main-container"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "0",
      }}
    >
      <NavigationComponent onClickBackButton={() => {}} />
      <PageView />
    </Grid>
  );
};

export default MainView;
