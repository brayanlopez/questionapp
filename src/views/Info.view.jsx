import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import NavigationComponent from "../components/Navigation/Navigation.component";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import questions from "./InfoPage/info.common";

const InfoView = () => {
  // TODO: check for section between questions and more neccesary things
  // ¿Dónde puedo encontrar más material sobre la UNAL?
  // ¿Tengo dudas sobre las pruebas específicas?
  // ¿Qué motivo la creación de esta página?
  // ¿?

  return (
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
      <NavigationComponent onClickBackButton={() => {}} />
      <Container>
        <Typography variant="h2">Preguntas frecuentes</Typography>
        <Typography variant="body1">
          En esta sección encontraras respuestas a algunas dudas comunes que
          puedas tener.
        </Typography>

        {questions.map((question, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight="bold">{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" align="justify">
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Grid>
  );
};

export default InfoView;
