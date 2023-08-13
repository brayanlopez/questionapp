import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import ErrorPage from "./views/ErrorPage";
import MainView from "./views/main.view";
import InfoView from "./views/Info.view";

const darkTheme = createTheme({
  palette: { mode: "light", primary: { main: purple[600] } },
});

function App() {
  const router = createBrowserRouter([
    { path: "/questionapp", element: <MainView /> },
    { path: "/questionapp/info", element: <InfoView /> },
    { path: "/", errorElement: <ErrorPage /> },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
