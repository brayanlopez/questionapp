import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { TOPIC_ROUTES } from "../../utils/routes";

import imageUrl from "/public/homework.svg";
import "./homepage.css";

const HomePage = () => {
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
          <h3>Bienvenido a QuestionApp</h3>
          <p>
            Este sitio ha sido desarrollado para que puedas practicar y
            aprender.
          </p>
          <Button variant="contained" onClick={onClickButton}>
            Comienza a practicar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
