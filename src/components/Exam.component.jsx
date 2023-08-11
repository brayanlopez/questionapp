import { useEffect, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionComponent from "./Question.component";

const ExamComponent = ({ questions, onClickBackButton }) => {
  const [tooltipMessage, setTooltipMessage] = useState("copiar pregunta");

  const onCopy = (question) => {
    navigator.clipboard.writeText(
      `${question.statement} \n ${question.options.map(
        (option) => `${option} \n`
      )}`
    );
    setTooltipMessage("pregunta copiada");
  };

  useEffect(() => {
    MathJax.typesetPromise();
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "5px 0",
        textAlign: "start",
      }}
    >
      <Box>
        <Typography variant="h2">{questions.title}</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <IconButton aria-label="return" onClick={onClickBackButton}>
          <ArrowBackIcon /> Volver
        </IconButton>
      </Box>
      {questions.questions.map((question, index) => (
        <>
          <QuestionComponent
            question={question}
            index={index + 1}
            onCopy={() => onCopy(question)}
            onCloseTooltip={() => setTooltipMessage("copiar pregunta")}
            tooltipMessage={tooltipMessage}
          />
        </>
      ))}
    </Container>
  );
};

export default ExamComponent;
