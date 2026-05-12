import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import type { QuizProps } from "../types";

type QuizState = "playing" | "finished";

const QuestionaryView = ({
  questions,
  title = "Cuestionario",
  durationMinutes = 60,
  onExit,
}: QuizProps) => {
  const theme = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [state, setState] = useState<QuizState>("playing");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  const total = questions.length;
  const current = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const isAnswered = selectedAnswer !== undefined;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (state !== "playing") return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setState("finished");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [state]);

  useEffect(() => {
    window.MathJax?.typesetPromise?.().catch(() => {});
  }, [currentQuestion]);

  const handleSelectAnswer = (option: string) => {
    if (state !== "playing") return;
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleFinish = () => setState("finished");

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setState("playing");
    setTimeLeft(durationMinutes * 60);
  };

  const score = Object.entries(answers).filter(
    ([index, answer]) => questions[Number(index)].correct_answer === answer,
  ).length;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (state === "finished") {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
        }}
      >
        <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              textAlign: "center",
              mb: 3,
            }}
          >
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {score === total
                ? "¡Perfecto!"
                : score >= total * 0.7
                  ? "¡Muy bien!"
                  : "Cuestionario completado"}
            </Typography>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: 4,
                borderColor:
                  score === total
                    ? "success.main"
                    : score >= total * 0.7
                      ? "warning.main"
                      : "error.main",
                mb: 2,
              }}
            >
              <Typography variant="h3" fontWeight={700}>
                {score}/{total}
              </Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {answeredCount === total
                ? "Respondiste todas las preguntas"
                : `Respondiste ${answeredCount} de ${total} preguntas`}
              {timeLeft === 0 && " · Se acabó el tiempo"}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button variant="contained" onClick={handleRestart}>
                Intentar de nuevo
              </Button>
              {onExit && (
                <Button variant="outlined" onClick={onExit}>
                  Salir
                </Button>
              )}
            </Box>
          </Paper>

          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const correct = userAnswer === q.correct_answer;
            return (
              <Paper
                key={i}
                variant="outlined"
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  borderColor: userAnswer
                    ? correct
                      ? alpha(theme.palette.success.main, 0.5)
                      : alpha(theme.palette.error.main, 0.5)
                    : alpha(theme.palette.divider, 0.6),
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                >
                  {userAnswer ? (
                    correct ? (
                      <CheckCircleIcon
                        color="success"
                        fontSize="small"
                        sx={{ mt: 0.3 }}
                      />
                    ) : (
                      <CancelIcon
                        color="error"
                        fontSize="small"
                        sx={{ mt: 0.3 }}
                      />
                    )
                  ) : (
                    <RadioButtonUncheckedIcon
                      color="disabled"
                      fontSize="small"
                      sx={{ mt: 0.3 }}
                    />
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{ mb: 0.5 }}
                    >
                      {i + 1}. {q.statement}
                    </Typography>
                    {userAnswer && (
                      <Typography
                        variant="caption"
                        fontWeight={600}
                        color={correct ? "success.main" : "error.main"}
                      >
                        {correct
                          ? "Correcta"
                          : `Incorrecta — Respuesta: ${q.correct_answer}`}
                      </Typography>
                    )}
                    {!userAnswer && (
                      <Typography variant="caption" color="text.disabled">
                        Sin responder
                      </Typography>
                    )}
                    {q.explanation && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, lineHeight: 1.6 }}
                      >
                        {q.explanation}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
      }}
    >
      <Paper
        sx={{
          borderRadius: 0,
          borderBottom: 1,
          borderColor: alpha(theme.palette.divider, 0.6),
          position: "sticky",
          top: 0,
          zIndex: 1100,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              gap: 1,
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Lista de preguntas"
            >
              <ListAltIcon />
            </IconButton>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                fontWeight: 600,
                px: 2,
                py: 0.5,
                borderRadius: 1,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
              }}
            >
              {currentQuestion + 1} / {total}
            </Typography>

            <Typography
              variant="subtitle2"
              fontWeight={600}
              color={timeLeft < 60 ? "error.main" : "text.primary"}
              sx={{ fontVariantNumeric: "tabular-nums" }}
            >
              {formatTime(timeLeft)}
            </Typography>

            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={handleFinish}
              sx={{ flexShrink: 0 }}
            >
              Finalizar
            </Button>

            {onExit && (
              <IconButton onClick={onExit} aria-label="Salir">
                <ExitToAppIcon />
              </IconButton>
            )}
          </Box>

          <Box
            sx={{
              height: 3,
              bgcolor: alpha(theme.palette.divider, 0.3),
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${(answeredCount / total) * 100}%`,
                bgcolor: "primary.main",
                transition: "width 0.3s",
              }}
            />
          </Box>
        </Container>
      </Paper>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              borderBottom: 1,
              borderColor: alpha(theme.palette.divider, 0.6),
            }}
          >
            <Typography variant="subtitle1" fontWeight={700}>
              Preguntas
            </Typography>
            <IconButton
              size="small"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ px: 1, pt: 1 }}>
            {questions.map((_, i) => {
              const answered = answers[i] !== undefined;
              const isCurrent = i === currentQuestion;
              return (
                <ListItemButton
                  key={i}
                  selected={isCurrent}
                  onClick={() => {
                    setCurrentQuestion(i);
                    setDrawerOpen(false);
                  }}
                  sx={{ borderRadius: 2, mb: 0.5 }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1.5,
                      bgcolor: isCurrent
                        ? "primary.main"
                        : answered
                          ? alpha(theme.palette.success.main, 0.15)
                          : alpha(theme.palette.divider, 0.3),
                      color: isCurrent
                        ? "primary.contrastText"
                        : answered
                          ? "success.main"
                          : "text.secondary",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    {i + 1}
                  </Box>
                  <ListItemText
                    primary={`Pregunta ${i + 1}`}
                    primaryTypographyProps={{
                      fontWeight: isCurrent ? 600 : 400,
                      fontSize: "0.9rem",
                    }}
                  />
                  {answered && (
                    <CheckCircleIcon
                      sx={{ fontSize: 18, color: "success.main" }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Paper
          variant="outlined"
          sx={{
            borderRadius: 3,
            borderColor: alpha(theme.palette.divider, 0.6),
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              px: { xs: 2.5, md: 4 },
              pt: { xs: 2.5, md: 3.5 },
              pb: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ lineHeight: 1.7, mb: 3 }}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: "primary.main",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  mr: 1.5,
                  flexShrink: 0,
                }}
              >
                {currentQuestion + 1}
              </Box>
              {current.statement}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {current.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isOptionCorrect = option === current.correct_answer;

                let borderColor = alpha(theme.palette.divider, 0.5);
                let bgcolor = "transparent";
                let textColor = "text.primary";

                if (isAnswered) {
                  if (isOptionCorrect) {
                    borderColor = alpha(theme.palette.success.main, 0.6);
                    bgcolor = alpha(theme.palette.success.main, 0.06);
                  } else if (isSelected) {
                    borderColor = alpha(theme.palette.error.main, 0.6);
                    bgcolor = alpha(theme.palette.error.main, 0.06);
                    textColor = "error.main";
                  }
                } else if (isSelected) {
                  borderColor = "primary.main";
                  bgcolor = alpha(theme.palette.primary.main, 0.06);
                }

                return (
                  <Paper
                    key={option}
                    variant="outlined"
                    onClick={() => handleSelectAnswer(option)}
                    sx={{
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 2,
                      borderColor,
                      bgcolor,
                      cursor: isAnswered ? "default" : "pointer",
                      transition: "all 0.15s",
                      "&:hover": !isAnswered
                        ? {
                            borderColor: "primary.main",
                            bgcolor: alpha(theme.palette.primary.main, 0.04),
                          }
                        : {},
                    }}
                  >
                    <Typography
                      variant="body2"
                      color={textColor}
                      sx={{ lineHeight: 1.6 }}
                    >
                      {option}
                    </Typography>
                  </Paper>
                );
              })}
            </Box>
          </Box>
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            variant="outlined"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion((p) => p - 1)}
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            disabled={currentQuestion === total - 1}
            onClick={() => setCurrentQuestion((p) => p + 1)}
          >
            Siguiente
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default QuestionaryView;
