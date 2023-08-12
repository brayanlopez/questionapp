import { useState } from "react";
import { Button, Container, Link, Typography } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import ExamComponent from "../components/Exam.component";

import questions from "../../mocks/math/arithmetic/questions.json";
import questions2 from "../../mocks/math/arithmetic/questions_2.json";
import questions3 from "../../mocks/math/arithmetic/questions_3.json";
import questions4 from "../../mocks/math/arithmetic/questions_4.json";
import questions5 from "../../mocks/math/arithmetic/questions_5.json";

import topic1 from "../../mocks/math/algebra/topic_1.json";
// import topic2 from "../../mocks/math/algebra/topic_2.json";

function PageView() {
  const arithmetic = [
    questions,
    questions2,
    questions3,
    questions4,
    questions5,
  ];

  const algebra = [topic1];
  // const mathList = [...arithmetic];
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
          <Typography variant="h3">Información importante</Typography>
          <Typography variant="body1" align="justify">
            La Universidad Nacional de Colombia Sede Manizales desarrolló una{" "}
            <Link
              href="https://www.uninscripciones.unal.edu.co/dipa/"
              target="_blank"
              rel="noreferrer"
            >
              Demostración Interactiva de la Prueba de Admisión
            </Link>{" "}
            una aplicación conocida comunmente como pruebas DIPA. Es muy útil
            para familiarizarse con el examén y el tipo de preguntas de la
            prueba.
          </Typography>
          {/* TODO: uncomment when copy button works fully */}
          {/* <Typography variant="body1">
            Cada pregunta tiene un boton de copiado, el cual te permite copiar
            la pregunta para usarla en alguna prueba que estes construyendo o
            incluso llevarla a algún modelo de inteligencia artificial como
            ChatGPT para hacerte una idea de como resolverla o revisar
            explicaciones alternativas.
          </Typography> */}
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
