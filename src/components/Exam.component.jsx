import { useEffect, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionComponent from "./Question.component";
import { deleteMathJaxNotation } from "../utils/utils";

const ExamComponent = ({ questions, onClickBackButton }) => {
  const [tooltipMessage, setTooltipMessage] = useState("copiar pregunta");

  const onCopy = (question) => {
    let textToCopy = `${question.statement} \n`;
    question.options.forEach((option) => (textToCopy += `${option}\n`));
    navigator.clipboard.writeText(deleteMathJaxNotation(textToCopy));
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
