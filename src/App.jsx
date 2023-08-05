import ErrorPage from "./views/ErrorPage";
import MainView from "./views/main.view";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/questionapp", element: <MainView /> },
    { path: "/", errorElement: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
