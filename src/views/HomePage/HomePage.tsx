import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { TOPIC_ROUTES } from "../../utils/routes";

import imageUrl from "/homework.svg";
import "./homepage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(TOPIC_ROUTES.UNAL);
  };
  return (
    <div className="homepage">
      <div className="row">
        <div className="image">
          <img src={imageUrl} />
        </div>

        <div className="content">
          <Typography variant="h3" gutterBottom>
            Bienvenido a QuestionApp
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.7rem", lineHeight: 2, pb: 2 }}>
            Este sitio ha sido desarrollado para que puedas practicar y
            aprender.
          </Typography>
          <Button variant="contained" onClick={onClickButton}>
            Comienza a practicar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
