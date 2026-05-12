import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";

import ExamComponent from "../../components/Exam.component";
import ExamCard from "../../components/ExamCard/ExamCard.component";

import questions1 from "../../../mocks/math/arithmetic/questions_1.json";
import questions2 from "../../../mocks/math/arithmetic/questions_2.json";
import questions3 from "../../../mocks/math/arithmetic/questions_3.json";
import questions4 from "../../../mocks/math/arithmetic/questions_4.json";
import questions5 from "../../../mocks/math/arithmetic/questions_5.json";

import topic1 from "../../../mocks/math/algebra/topic_1.json";
import topic2 from "../../../mocks/math/algebra/topic_2.json";
import topic3 from "../../../mocks/math/algebra/topic_3.json";
import topic4 from "../../../mocks/math/algebra/topic_4.json";
import topic5 from "../../../mocks/math/algebra/topic_5.json";
import topic6 from "../../../mocks/math/algebra/topic_6.json";

const ARITHMETIC = [questions1, questions2, questions3, questions4, questions5];

const ALGEBRA = [topic1, topic2, topic3, topic4, topic5, topic6];

const CATEGORIES = [
  { label: "Aritmética", items: ARITHMETIC, color: "primary" as const },
  { label: "Álgebra", items: ALGEBRA, color: "secondary" as const },
];

function PageView() {
  const theme = useTheme();
  const [indexSelected, setindexSelected] = useState(0);
  const [isItemSelected, setisItemSelected] = useState(false);

  const onClickButton = (index: number) => {
    setisItemSelected(true);
    setindexSelected(index);
  };

  const onClickBackButton = () => setisItemSelected(false);

  const allItems = [...ARITHMETIC, ...ALGEBRA];

  if (isItemSelected) {
    return (
      <ExamComponent
        questions={allItems[indexSelected]}
        onClickBackButton={onClickBackButton}
      />
    );
  }

  let globalIndex = 0;

  return (
    <Box>
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
          pt: { xs: 4, md: 6 },
          pb: { xs: 3, md: 4 },
          mb: 4,
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}
          >
            Ejercicios examen de la UNAL
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            A continuación encontrarás una serie de ejercicios de matemáticas en
            diferentes áreas. Te serán útiles en tu preparación para el examen
            de ingreso a la Universidad Nacional. Los ejercicios han sido
            tomados y adaptados de exámenes realizados en años anteriores.
          </Typography>
        </Container>
      </Box>

      <Container>
        {CATEGORIES.map((category) => {
          const categoryStartIndex = globalIndex;
          globalIndex += category.items.length;

          return (
            <Box key={category.label} sx={{ mb: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 4,
                    height: 28,
                    borderRadius: 2,
                    bgcolor: `${category.color}.main`,
                  }}
                />
                <Typography variant="h5" fontWeight={600}>
                  {category.label}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.disabled"
                  sx={{ ml: "auto" }}
                >
                  {category.items.length}{" "}
                  {category.items.length === 1 ? "tema" : "temas"}
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {category.items.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={categoryStartIndex + i}>
                    <ExamCard
                      title={item.title}
                      questionCount={item.questions?.length ?? 0}
                      category={category.label}
                      accentColor={category.color}
                      onClick={() => onClickButton(categoryStartIndex + i)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

export default PageView;
