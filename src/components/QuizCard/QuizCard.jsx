export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <div>
      <h3>{topic}</h3>
      <div>
        <p>level: {level}</p>
        <p>time: {time} </p>
        <p>questions: {questions}</p>
      </div>
    </div>
  );
};
