import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Paper } from "@mui/material";

import ErrorPage from "./views/ErrorPage/ErrorPage";
import MainView from "./views/main.view";
import InfoView from "./views/InfoPage/Info.view";

import { MAIN_ROUTE, INfORMATION_ROUTE, TOPIC_ROUTES } from "./utils/routes";
import PageView from "./views/UnalPage/page.view";
import MathPage from "./views/MathPage/MathPage";
import HomePage from "./views/HomePage/HomePage";
import { ThemeProvider } from "./utils/ThemeContext";

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
    { path: "*", element: <ErrorPage /> },
  ],
  {
    basename: MAIN_ROUTE,
  },
);

function App() {
  return (
    <ThemeProvider>
      <Paper sx={{ minHeight: "100vh", borderRadius: 0 }}>
        <RouterProvider router={router} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
