import "./index.css";

export default function CommonSelect({ onChange }: CommonSelect) {
  return (
    <div className="common-select">
      <label className="label">
        <span className="label-text">Sort By</span>
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={onChange}
      >
        <option disabled selected>
          Select an Option
        </option>
        <option value="name">Name</option>
        <option value="rank">Rank</option>
        <option value="age">Age</option>
      </select>
    </div>
  );
}
