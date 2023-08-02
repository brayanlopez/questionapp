import "./App.css";
import QuestionComponent from "./components/Question.component";
import questions from "../mocks/questions_2.json";
import { Container, Divider, Typography } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "5px 0",
        textAlign: "start",
      }}
    >
      <Typography variant="h2">{questions.title}</Typography>
      {questions.questions.map((question, index) => (
        <>
          <QuestionComponent
            key={`key-${index}`}
            question={question}
            index={index + 1}
          />
          <Divider />
        </>
      ))}
    </Container>
  );
}

export default App;
