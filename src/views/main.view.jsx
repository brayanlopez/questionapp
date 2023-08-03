import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import questions from "../../mocks/questions.json";
import questions2 from "../../mocks/questions_2.json";
import questions3 from "../../mocks/questions_3.json";
import questions4 from "../../mocks/questions_4.json";
import ExamComponent from "../components/Exam.component";

function MainView() {
  const mathList = [questions, questions2, questions3, questions4];

  const [indexSelected, setindexSelected] = useState(0);
  const [isItemSelected, setisItemSelected] = useState(false);

  const onClickButton = (index) => {
    setisItemSelected(true);
    setindexSelected(index);
  };

  const onClickBackButton = () => {
    setisItemSelected(false);
  };

  return (
    <Container>
      {!isItemSelected ? (
        <>
          <Typography variant="h2">Ejercicios sobre matemáticas</Typography>
          <Typography variant="body1" align="justify">
            A continuación encontraras una serie de ejercicios de matemáticas en
            diferentes áreas. Te serán útiles en tu preparación para el examen
            de ingreso a la Universidad Nacional. Los ejercicios han sido
            tomados y adaptados de examenes realizados en años anteriores.
          </Typography>
          {mathList.map((item, index) => (
            <Button
              key={index}
              startIcon={<FunctionsIcon />}
              size="large"
              fullWidth
              variant="outlined"
              onClick={() => onClickButton(index)}
            >
              {item.title}
            </Button>
          ))}
        </>
      ) : (
        <ExamComponent
          questions={mathList[indexSelected]}
          onClickBackButton={onClickBackButton}
        />
      )}
    </Container>
  );
}

export default MainView;
