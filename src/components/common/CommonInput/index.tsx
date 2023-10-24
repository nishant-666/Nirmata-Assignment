import "./index.css";

export default function CommonInput({ placeholder, onChange }: CommonInput) {
  return (
    <div>
      <input
        onChange={onChange}
        className="common-input"
        placeholder={placeholder}
      />
    </div>
  );
}
