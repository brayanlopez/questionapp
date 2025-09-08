import React, { useState } from "react";
import { Container, Typography, Grid, Card } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import ExamComponent from "../../components/Exam.component";

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

function PageView() {
  const arithmetic = [
    questions1,
    questions2,
    questions3,
    questions4,
    questions5,
  ];

  // const algebra = [topic1, topic2, topic3, topic4, topic5];
  const algebra = [topic1, topic2, topic3, topic4];
  const mathList = [...arithmetic, ...algebra];

  const [indexSelected, setindexSelected] = useState(0);
  const [isItemSelected, setisItemSelected] = useState(false);

  const onClickButton = (index) => {
    setisItemSelected(true);
    setindexSelected(index);
  };

  const onClickBackButton = () => setisItemSelected(false);

  return (
    <Container>
      {!isItemSelected ? (
        <>
          <Typography variant="h2">Ejercicios examen de la UNAL</Typography>
          <Typography variant="body1" align="justify" sx={{ mb: 4 }}>
            A continuación encontrarás una serie de ejercicios de matemáticas en
            diferentes áreas. Te serán útiles en tu preparación para el examen
            de ingreso a la Universidad Nacional. Los ejercicios han sido
            tomados y adaptados de exámenes realizados en años anteriores.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {mathList.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    width: 320,
                    height: 180,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                    boxShadow: 2,
                    margin: "0 auto",
                    "&:hover": { boxShadow: 8, borderColor: "primary.main" },
                  }}
                  onClick={() => onClickButton(index)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <FunctionsIcon color="primary" />
                    {item.title}
                  </Typography>
                  {item.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <ExamComponent
          questions={mathList[indexSelected]}
          onClickBackButton={onClickBackButton}
        />
      )}
    </Container>
  );
}

export default PageView;
