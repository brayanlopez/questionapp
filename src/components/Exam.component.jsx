import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionComponent from "./Question.component";
import { useEffect } from "react";

const ExamComponent = ({ questions, onClickBackButton }) => {
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
            key={`key-${index}`}
            question={question}
            index={index + 1}
          />
          <Divider />
        </>
      ))}
    </Container>
  );
};

export default ExamComponent;
