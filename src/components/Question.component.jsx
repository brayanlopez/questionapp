import { Paper } from "@mui/material";

const QuestionComponent = ({ question, index }) => {
  return (
    <Paper
      sx={{
        padding: "15px",
        width: "100%",
        margin: "7px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <div style={{ margin: "15px 0", width: "100%" }}>
        {index}. {question.statement}
        {question.options.map((option, i) => (
          <p key={i}>{option}</p>
        ))}
        <details>
          <summary>Click here to see the answer</summary>
          <p>Respuesta correcta: {question.correct_answer}</p>
          {question.explanation && <p>Explicación: {question.explanation}</p>}
        </details>
      </div>
    </Paper>
  );
};

export default QuestionComponent;
