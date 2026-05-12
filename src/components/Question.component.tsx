import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Question {
  statement: string;
  options: string[];
  correct_answer: string;
  explanation?: string;
}

interface QuestionComponentProps {
  question: Question;
  index: number;
  onCopy: () => void;
  tooltipMessage: string;
  onCloseTooltip: () => void;
}

const QuestionComponent = ({
  question: { statement, options, correct_answer, explanation },
  index,
  onCopy,
  tooltipMessage,
  onCloseTooltip,
}: QuestionComponentProps) => {
  const theme = useTheme();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: alpha(theme.palette.divider, 0.6),
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 2.5 },
          pb: { xs: 2, md: 2.5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              lineHeight: 1.6,
              flex: 1,
              "& .MathJax": { fontSize: "inherit" },
            }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 26,
                height: 26,
                borderRadius: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: 700,
                mr: 1.5,
                flexShrink: 0,
              }}
            >
              {index}
            </Box>
            {statement}
          </Typography>
          <Tooltip
            placement="top"
            title={tooltipMessage}
            onClose={onCloseTooltip}
          >
            <IconButton
              aria-label="copy"
              onClick={onCopy}
              size="small"
              sx={{
                flexShrink: 0,
                color: "text.disabled",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <ContentPasteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {options.map((option, i) => (
            <Paper
              key={i}
              variant="outlined"
              sx={{
                px: 2,
                py: 1.25,
                borderRadius: 1.5,
                borderColor: alpha(theme.palette.divider, 0.4),
                bgcolor: alpha(theme.palette.background.default, 0.4),
              }}
            >
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {option}
              </Typography>
            </Paper>
          ))}
        </Box>

        {(correct_answer || explanation) && (
          <Box sx={{ mt: 2 }}>
            <Box
              onClick={() => setShowAnswer(!showAnswer)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.875rem",
                "&:hover": { opacity: 0.8 },
                userSelect: "none",
              }}
            >
              <ExpandMoreIcon
                sx={{
                  transition: "transform 0.2s",
                  transform: showAnswer ? "rotate(180deg)" : "rotate(0deg)",
                  fontSize: "1.1rem",
                }}
              />
              {showAnswer ? "Ocultar respuesta" : "Ver respuesta"}
            </Box>
            <Collapse in={showAnswer}>
              <Box
                sx={{
                  mt: 1.5,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.success.main, 0.06),
                  border: 1,
                  borderColor: alpha(theme.palette.success.main, 0.2),
                }}
              >
                {correct_answer && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: explanation ? 1.5 : 0,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: "1.1rem", color: "success.main" }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="success.dark"
                    >
                      Respuesta correcta: {correct_answer}
                    </Typography>
                  </Box>
                )}
                {explanation && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {explanation}
                  </Typography>
                )}
              </Box>
            </Collapse>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default QuestionComponent;
