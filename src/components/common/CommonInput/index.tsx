import "./index.css";

export default function CommonInput({ placeholder, onChange }: CommonInput) {
  return (
    <div className="search-input">
      <label className="label">
        <span className="label-text">Search</span>
      </label>
      <input
        onChange={onChange}
        className={`input input-bordered w-full max-w-xs common-input`}
        placeholder={placeholder}
      />
    </div>
  );
}
