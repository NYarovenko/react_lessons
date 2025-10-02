export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <div>
      <h3>{topic}</h3>
      <button onClick={() => onDelete(id)}>Delete</button>
      <div>
        <p>level: {level}</p>
        <p>time: {time} </p>
        <p>questions: {questions}</p>
      </div>
    </div>
  );
};
