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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

export default function ErrorPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.background.default, 1)} 50%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "8rem", sm: "10rem" },
              lineHeight: 1,
              letterSpacing: { xs: 8, sm: 12 },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              userSelect: "none",
            }}
          >
            404
          </Typography>

          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
          >
            Ooops...
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, fontSize: { xs: "0.95rem", sm: "1.05rem" } }}
          >
            La página que buscas no existe o ha sido movida.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => navigate("/")}
              sx={{ px: 4, py: 1.5 }}
            >
              Ir al inicio
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{ px: 4, py: 1.5 }}
            >
              Volver atrás
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
