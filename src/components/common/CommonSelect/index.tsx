import "./index.css";

export default function CommonSelect({
  selectedOption,
  onChange,
}: CommonSelect) {
  return (
    <div className="common-select">
      <label>Select an option: </label>
      <select
        className="select-option"
        value={selectedOption}
        onChange={onChange}
      >
        <option value="">Select an Option</option>
        <option value="name">Name</option>
        <option value="rank">Rank</option>
        <option value="age">Age</option>
      </select>
    </div>
  );
}
