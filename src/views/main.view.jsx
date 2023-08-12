import { Grid, ThemeProvider, createTheme } from "@mui/material";
import NavigationComponent from "../components/Navigation.component";
import PageView from "./page.view";
import { purple } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: { mode: "light", primary: { main: purple[600] } },
});

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
