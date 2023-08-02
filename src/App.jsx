import { useState } from "react";
import "./App.css";
import { Button, Container, Typography } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";

import questions from "../mocks/questions.json";
import questions2 from "../mocks/questions_2.json";
import ExamComponent from "./components/Exam.component";

function App() {
  const mathList = [questions, questions2];

  const [indexSelected, setindexSelected] = useState(0);
  const [isItemSelected, setisItemSelected] = useState(false);

  const onClickButton = (index) => {
    setisItemSelected(true);
    setindexSelected(index);
  };

  const onClickBackButton = () => {
    setisItemSelected(false);
  };

  return (
    <Container>
      {!isItemSelected ? (
        <>
          <Typography variant="h2">Ejercicios sobre matemáticas</Typography>
          {mathList.map((item, index) => (
            <Button
              key={index}
              startIcon={<FunctionsIcon />}
              size="large"
              fullWidth
              variant="outlined"
              onClick={() => onClickButton(index)}
            >
              {item.title}
            </Button>
          ))}
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

export default App;
