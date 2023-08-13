import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import ExamComponent from "../components/Exam.component";

import questions from "../../mocks/math/arithmetic/questions.json";
import questions2 from "../../mocks/math/arithmetic/questions_2.json";
import questions3 from "../../mocks/math/arithmetic/questions_3.json";
import questions4 from "../../mocks/math/arithmetic/questions_4.json";
import questions5 from "../../mocks/math/arithmetic/questions_5.json";

import topic1 from "../../mocks/math/algebra/topic_1.json";
import topic2 from "../../mocks/math/algebra/topic_2.json";

function PageView() {
  const arithmetic = [
    questions,
    questions2,
    questions3,
    questions4,
    questions5,
  ];

  const algebra = [topic1, topic2];
  const mathList = [...arithmetic, ...algebra];

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

export default PageView;
