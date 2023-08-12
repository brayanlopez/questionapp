import { Grid, ThemeProvider, createTheme } from "@mui/material";
import NavigationComponent from "../components/Navigation.component";
import PageView from "./page.view";

const darkTheme = createTheme({ palette: { mode: "light" } });

const MainView = () => {
  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
};

export default MainView;
