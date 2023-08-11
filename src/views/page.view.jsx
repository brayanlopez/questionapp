import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import ExamComponent from "../components/Exam.component";

import questions from "../../mocks/questions.json";
import questions2 from "../../mocks/questions_2.json";
import questions3 from "../../mocks/questions_3.json";
import questions4 from "../../mocks/questions_4.json";
import questions5 from "../../mocks/questions_5.json";

import topic2 from "../../mocks/math/algebra/topic_2.json";
// import MainView from "./main.view";
import NavigationComponent from "../components/Navigation.component";

const darkTheme = createTheme({
  palette: { mode: "light" },
});

function PageView() {
  const arithmetic = [
    questions,
    questions2,
    questions3,
    questions4,
    questions5,
  ];

  const algebra = [topic2];
  const mathList = [...arithmetic];
  // const mathList = [...arithmetic, ...algebra];

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
    <ThemeProvider theme={darkTheme}>
      <Grid
        className="main-container"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          width: "100vw",
          margin: 0,
          padding: "0",
        }}
      >
        <NavigationComponent onClickBackButton={onClickBackButton} />
        <Container>
          {!isItemSelected ? (
            <>
              <Typography variant="h2">Ejercicios sobre matemáticas</Typography>
              <Typography variant="body1" align="justify">
                A continuación encontraras una serie de ejercicios de
                matemáticas en diferentes áreas. Te serán útiles en tu
                preparación para el examen de ingreso a la Universidad Nacional.
                Los ejercicios han sido tomados y adaptados de examenes
                realizados en años anteriores.
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
      </Grid>
    </ThemeProvider>
  );
}

export default PageView;
