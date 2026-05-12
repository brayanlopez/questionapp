import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import questions from "./info.common";

const InfoView = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
          pt: { xs: 5, md: 8 },
          pb: { xs: 4, md: 6 },
          mb: { xs: 3, md: 4 },
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}
          >
            Preguntas frecuentes
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              maxWidth: 640,
            }}
          >
            En esta sección encontraras respuestas a algunas dudas comunes que
            puedas tener.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ pb: 6 }}>
        {questions.map((question, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: 2,
              "&:before": { display: "none" },
              boxShadow: `0 1px 3px ${alpha(theme.palette.common.black, 0.08)}`,
              "&.Mui-expanded": {
                boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.12)}`,
                borderColor: `${theme.palette.primary.main}`,
              },
              border: 1,
              borderColor: alpha(theme.palette.divider, 0.6),
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                px: 3,
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  gap: 2,
                },
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                {question.icon}
              </Box>
              <Typography
                fontWeight={600}
                sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default InfoView;
