const QuestionComponent = ({ question, index }) => {
  return (
    <div>
      {index}. {question.statement}
      {question.options.map((option, i) => (
        <p key={i}>{option}</p>
      ))}
    </div>
  );
};

export default QuestionComponent;
