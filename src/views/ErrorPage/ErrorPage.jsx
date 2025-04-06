import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "@mui/material";

import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <p>page not found</p>
        <Button variant="contained" onClick={() => navigate("/")}>
          Return to the main page
        </Button>
      </div>
    </>
  );
}
