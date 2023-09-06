import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Countdown from "../components/countdown.component";

const QuestionaryView = () => {
  const questions = [
    {
      statement:
        "Considere las siguientes propociones relacionadas con los númeroes reales, dado a=-17/12 y b=15/12. \n (1) Entre a y b hay exactamente 3 números enteros. \n (2) En la recta númerica la coordenada el punto medio entre a y b es -1/12",
      type: "Multiple",
      options: [
        "a. (1) y (2) son verdaderas",
        "b. (1) y (2) son falsas",
        "c. (1) es falsa y (2) es verdadera",
        "d. (1) es verdadera y (2) es falsa",
      ],
      correct_answer: "d",
      explanation: "",
    },
    {
      statement:
        "Los 2/5 de estudiantes de un curso son mujeres. Es correcto afirmar que en el curso hay",
      type: "Multiple",
      options: [
        "a. Mas hombres que mujeres",
        "b. Dos mujeres y cinco hombres",
        "c. Mas mujeres que hombres",
        "d. Dos hombres y cinco mujeres",
      ],
      correct_answer: "a",
      explanation:
        "Si llevamos la fracción 2/5 a porcentaje, se observa que el 40% del curso son mujeres. Por tanto, el 60% deben ser hombres. Facilmente se deduce que hay más hombres que mujeres en el curso.",
    },
  ];

  const [questionSelected, setQuestionSelected] = useState(0);

  useEffect(() => {
    MathJax.typesetPromise();
  }, []);

  return (
    <Grid
      display="flex"
      className="main-container"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "0",
        alignItems: "start",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "0.5fr 2fr 0.5fr",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <IconButton>
            <ListAltIcon />
            <Typography component={"span"}>Preguntas </Typography>
          </IconButton>
          <Button>Finalizar cuestionario</Button>
          <IconButton onClick={() => {}}>
            <ExitToAppIcon />
          </IconButton>
        </Box>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          // anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={false}
          // onClose={handleCloseUserMenu}
        >
          {questions.map((setting, index) => (
            <MenuItem key={index} onClick={() => {}}>
              {/* {setting.icon} */}
              <Typography>{index}</Typography>
            </MenuItem>
          ))}
        </Menu>

        <Box margin={"2%"}>
          <Paper sx={{ padding: "15px" }}>
            <Typography component={"div"} display={"inline-block"}>
              1/15
            </Typography>
            <Typography component={"div"} display={"inline-block"}>
              {questions[questionSelected].statement}
            </Typography>
          </Paper>
          <Box display={"flex"} flexWrap={"wrap"} gap={"15px"} margin={"3% 0"}>
            {questions[questionSelected].options?.map((option, i) => (
              <Button fullWidth key={i} variant="outlined" size="large">
                {option}
              </Button>
            ))}
          </Box>
        </Box>

        <Box justifyContent="space-between" display={"flex"}>
          <Button onClick={() => setQuestionSelected(0)}>Anterior</Button>
          <Countdown />
          <Button onClick={() => setQuestionSelected(1)}>Siguiente</Button>
        </Box>
      </Container>
    </Grid>
  );
};

export default QuestionaryView;
