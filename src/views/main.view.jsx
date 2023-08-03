import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import questions from "../../mocks/questions.json";
import questions2 from "../../mocks/questions_2.json";
import questions3 from "../../mocks/questions_3.json";
import questions4 from "../../mocks/questions_4.json";
import ExamComponent from "../components/Exam.component";
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

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
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ minHeight: "100vh", minWidth: "75vw", margin: 0 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" color="inherit" component="div">
              <Link
                to={`/questionapp/`}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onClick={onClickBackButton}
              >
                QuestionApp
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <DarkModeIcon />
          </Toolbar>
        </AppBar>

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
      </Container>
    </ThemeProvider>
  );
}

export default MainView;
