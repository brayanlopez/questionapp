import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const QuestionComponent = ({
  question: { statement, options, correct_answer, explanation },
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
      <Box display={"flex"} flexDirection={"row-reverse"}>
        <Tooltip
          placement="top"
          title={tooltipMessage}
          onClose={onCloseTooltip}
        >
          <IconButton
            aria-label="copy"
            onClick={onCopy}
            sx={{ border: "none" }}
          >
            <ContentPasteIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <div style={{ margin: "15px 0", width: "100%" }}>
        {index}. {statement}
        {options.map((option, i) => (
          <p key={i}>{option}</p>
        ))}
        {correct_answer && explanation && (
          <details>
            <summary>Clic para ver la respuesta</summary>
            {correct_answer && <p>Respuesta correcta: {correct_answer}</p>}
            {explanation && <p>Explicación: {explanation}</p>}
          </details>
        )}
      </div>
    </Paper>
  );
};

export default QuestionComponent;
