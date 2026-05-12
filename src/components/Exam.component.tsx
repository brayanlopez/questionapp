import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QuestionComponent from "./Question.component";
import { deleteMathJaxNotation } from "../utils/utils";
import type { Question, ExamComponentProps } from "../types";

const ExamComponent = ({
  questions,
  onClickBackButton,
}: ExamComponentProps) => {
  const theme = useTheme();
  const [tooltipMessage, setTooltipMessage] = useState("copiar pregunta");

  const onCopy = (question: Question) => {
    let textToCopy = `${question.statement} \n`;
    question.options.forEach((option) => (textToCopy += `${option}\n`));
    navigator.clipboard.writeText(deleteMathJaxNotation(textToCopy));
    setTooltipMessage("pregunta copiada");
  };

  useEffect(() => {
    MathJax.typesetPromise().catch(() => {});
  }, []);

  return (
    <Box sx={{ minHeight: "100%", width: "100%" }}>
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
          borderBottom: 1,
          borderColor: alpha(theme.palette.divider, 0.6),
          pt: { xs: 3, md: 4 },
          pb: { xs: 2.5, md: 3 },
        }}
      >
        <Container maxWidth="md">
          <Button
            onClick={onClickBackButton}
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 1.5,
              color: "text.secondary",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            Volver
          </Button>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ fontSize: { xs: "1.4rem", md: "1.75rem" } }}
          >
            {questions.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {questions.questions.length}{" "}
            {questions.questions.length === 1 ? "pregunta" : "preguntas"}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 3 } }}>
        {questions.questions.map((question, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            {index > 0 && (
              <Divider
                sx={{ mb: 2, borderColor: alpha(theme.palette.divider, 0.4) }}
              />
            )}
            <QuestionComponent
              question={question}
              index={index + 1}
              onCopy={() => onCopy(question)}
              onCloseTooltip={() => setTooltipMessage("copiar pregunta")}
              tooltipMessage={tooltipMessage}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default ExamComponent;
