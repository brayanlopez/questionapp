import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect } from "react";
import Countdown from "../components/countdown.component";

const QuestionaryView = () => {
  const question = {
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
  };

  useEffect(() => {
    MathJax.typesetPromise();
  }, []);

  return (
    <Grid
      display={"flex"}
      className="main-container"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "0",
        alignItems: "center",
      }}
    >
      <Container sx={{ height: "100vh", alignItems: "end" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
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
        <Box margin={"2%"}>
          <Paper sx={{ padding: "15px" }}>
            <Typography component={"div"} display={"inline-block"}>
              1/15
            </Typography>
            <Typography component={"div"} display={"inline-block"}>
              {question.statement}
            </Typography>
          </Paper>
          <Box display={"flex"} flexWrap={"wrap"} gap={"15px"} margin={"3% 0"}>
            {question.options.map((option, i) => (
              <Button fullWidth key={i} variant="outlined" size="large">
                {option}
              </Button>
            ))}
          </Box>
        </Box>

        <Box justifyContent="space-between" display={"flex"}>
          <Button onClick={() => {}}>Anterior</Button>
          <Countdown />
          <Button onClick={() => {}}>Siguiente</Button>
        </Box>
      </Container>
    </Grid>
  );
};

export default QuestionaryView;
