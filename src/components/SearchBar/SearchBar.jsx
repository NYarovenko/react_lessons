export const SearchBar = ({ topic, level, onChangeTopic, onChangeLevel }) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        placeholder="Filter by topic..."
        onChange={evt => onChangeTopic(evt.target.value)}
      ></input>
      <select value={level} onChange={evt => onChangeLevel(evt.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
