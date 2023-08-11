import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const QuestionComponent = ({
  question,
  index,
  onCopy,
  tooltipMessage,
  onCloseTooltip,
}) => {
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
      <Box flexWrap={5} />
      {/* <Tooltip placement="top" title={tooltipMessage} onClose={onCloseTooltip}>
        <IconButton aria-label="copy" onClick={onCopy} sx={{ border: "none" }}>
          <ContentPasteIcon />
        </IconButton>
      </Tooltip> */}
      <div style={{ margin: "15px 0", width: "100%" }}>
        {index}. {question.statement}
        {question.options.map((option, i) => (
          <p key={i}>{option}</p>
        ))}
        <details>
          <summary>Clic para ver la respuesta</summary>
          <p>Respuesta correcta: {question.correct_answer}</p>
          {question.explanation && <p>Explicación: {question.explanation}</p>}
        </details>
      </div>
    </Paper>
  );
};

export default QuestionComponent;
