import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import ErrorPage from "./views/ErrorPage/ErrorPage";
import MainView from "./views/main.view";
import InfoView from "./views/Info.view";

import {
  MAIN_ROUTE,
  // QUESTIONARY_ROUTE,
  INfORMATION_ROUTE,
  TOPIC_ROUTES,
} from "./utils/routes";
import PageView from "./views/UnalPage/page.view";
import MathPage from "./views/MathPage/MathPage";
import HomePage from "./views/HomePage/HomePage";
// import QuestionaryView from "./views/questionary.view";

const lightTheme = createTheme({
  palette: { mode: "light", primary: { main: purple[600] } },
});

// const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainView />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: TOPIC_ROUTES.MATH, element: <MathPage /> },
          { path: TOPIC_ROUTES.UNAL, element: <PageView /> },
          { path: INfORMATION_ROUTE, element: <InfoView /> },
        ],
      },
      // { path: QUESTIONARY_ROUTE, element: <QuestionaryView /> },
      { path: "*", element: <ErrorPage /> },
    ],
    {
      basename: MAIN_ROUTE,
    }
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <Paper>
        <RouterProvider router={router} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
