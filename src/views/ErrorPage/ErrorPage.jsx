import { useNavigate, useRouteError } from "react-router-dom";

import "./ErrorPage.css";
import { Button } from "@mui/material";
import { MAIN_ROUTE } from "../../utils/routes";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div class="number">404</div>
      <div class="text">
        <span>Ooops...</span>
        <p>page not found</p>
        <Button variant="contained" onClick={() => navigate(MAIN_ROUTE)}>
          Return to the main page
        </Button>
      </div>
    </>
  );
}
