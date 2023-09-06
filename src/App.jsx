import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import ErrorPage from "./views/ErrorPage";
import MainView from "./views/main.view";
import InfoView from "./views/Info.view";
import {
  MAIN_ROUTE,
  QUESTIONARY_ROUTE,
  ROUTE_INfORMATION,
} from "./utils/routes";
import QuestionaryView from "./views/questionary.view";

const lightTheme = createTheme({
  palette: { mode: "light", primary: { main: purple[600] } },
});

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  const router = createBrowserRouter([
    { path: MAIN_ROUTE, element: <MainView /> },
    { path: ROUTE_INfORMATION, element: <InfoView /> },
    // { path: QUESTIONARY_ROUTE, element: <QuestionaryView /> },
    { path: "/", errorElement: <ErrorPage /> },
  ]);

  return (
    <ThemeProvider theme={lightTheme}>
      <Paper>
        <RouterProvider router={router} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
