export const SearchBar = ({ filters: { topic, level }, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        placeholder="Filter by topic..."
        onChange={evt => onChange('topic', evt.target.value)}
      ></input>
      <select
        value={level}
        onChange={evt => onChange('level', evt.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
