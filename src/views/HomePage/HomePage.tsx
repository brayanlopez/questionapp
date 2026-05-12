import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { TOPIC_ROUTES } from "../../utils/routes";

import imageUrl from "/homework.svg";

export const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 48px)",
        display: "flex",
        alignItems: "center",
        background: isDark
          ? `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.15)} 0%, ${alpha(
              theme.palette.background.default,
              1,
            )} 50%, ${alpha(theme.palette.primary.dark, 0.08)} 100%)`
          : `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(
              theme.palette.background.default,
              1,
            )} 50%, ${alpha(theme.palette.secondary.light, 0.05)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              flex: "1 1 40%",
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, md: 1 },
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt="Homework illustration"
              sx={{
                maxWidth: 420,
                width: "100%",
                height: "auto",
                filter: isDark
                  ? "brightness(0.85) invert(0.82) hue-rotate(180deg)"
                  : "none",
                transition: "filter 0.4s ease",
              }}
            />
          </Box>

          <Box sx={{ flex: "1 1 60%" }}>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Bienvenido a QuestionApp
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 540,
                ...(theme.palette.mode === "dark"
                  ? {}
                  : { mx: { xs: "auto", md: 0 } }),
              }}
            >
              Este sitio ha sido desarrollado para que puedas practicar y
              aprender.
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(TOPIC_ROUTES.UNAL)}
              sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
            >
              Comienza a practicar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
