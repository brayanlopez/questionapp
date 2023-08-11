import ErrorPage from "./views/ErrorPage";
import PageView from "./views/page.view";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/questionapp", element: <PageView /> },
    { path: "/", errorElement: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
