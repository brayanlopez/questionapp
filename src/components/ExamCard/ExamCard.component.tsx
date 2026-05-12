import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  useTheme,
  alpha,
} from "@mui/material";

interface ExamCardProps {
  title: string;
  questionCount: number;
  category: string;
  accentColor: "primary" | "secondary";
  onClick: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Aritmética: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </svg>
  ),
  Álgebra: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const ExamCard = ({
  title,
  questionCount,
  category,
  accentColor,
  onClick,
}: ExamCardProps) => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        width: {
          xs: "100%",
          sm: 340,
        },
        maxWidth: 340,
        mx: "auto",
        transition: "transform 0.25s, box-shadow 0.25s",
        borderColor: alpha(theme.palette.divider, 0.8),
        position: "relative",
        overflow: "visible",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 12px 32px ${alpha(theme.palette[accentColor].main, 0.2)}`,
          borderColor: `${accentColor}.main`,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          bgcolor: `${accentColor}.main`,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />
      <CardActionArea
        onClick={onClick}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pt: 3.5,
            pb: 3,
            px: 3,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: alpha(theme.palette[accentColor].main, 0.12),
              color: `${accentColor}.main`,
              fontSize: "1.25rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {categoryIcons[category] ?? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
          </Box>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            lineHeight={1.35}
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              color: "text.disabled",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 2v6h6" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <Typography variant="caption" fontSize="0.8rem" lineHeight={1}>
              {questionCount} {questionCount === 1 ? "pregunta" : "preguntas"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExamCard;
