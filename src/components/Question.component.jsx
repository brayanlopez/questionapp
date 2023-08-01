const QuestionComponent = ({ question }) => {
  return (
    <div>
      {question.statement}
      {question.options.map((option, i) => (
        <p key={i}>{option}</p>
      ))}
    </div>
  );
};

export default QuestionComponent;
