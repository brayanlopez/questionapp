import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Paper } from "@mui/material";

import ErrorPage from "./views/ErrorPage/ErrorPage";
import MainView from "./views/main.view";
import InfoView from "./views/InfoPage/Info.view";

import {
  MAIN_ROUTE,
  INfORMATION_ROUTE,
  TOPIC_ROUTES,
  QUESTIONARY_ROUTE,
} from "./utils/routes";
import PageView from "./views/UnalPage/page.view";
import MathPage from "./views/MathPage/MathPage";
import HomePage from "./views/HomePage/HomePage";
import QuestionaryView from "./views/questionary.view";
import { ThemeProvider } from "./utils/ThemeContext";
import questions1 from "../mocks/math/arithmetic/questions_1.json";

function QuizRoute() {
  const navigate = useNavigate();
  return (
    <QuestionaryView
      questions={questions1.questions}
      title={questions1.title}
      durationMinutes={30}
      onExit={() => navigate("/")}
    />
  );
}

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
    {
      path: QUESTIONARY_ROUTE,
      element: <QuizRoute />,
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
