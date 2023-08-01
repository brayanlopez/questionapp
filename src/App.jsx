import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import questions from "../mocks/questions.json";
import QuestionComponent from "./components/Question.component";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(questions);
  }, []);

  return (
    <>
      \(ax^2 + bx + c = 0\)
      {questions.map((question, index) => (
        <QuestionComponent key={`key-${index}`}>
          {question.statement}
          {question.options.map((option, i) => (
            <p key={i}>{option}</p>
          ))}
        </QuestionComponent>
      ))}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
