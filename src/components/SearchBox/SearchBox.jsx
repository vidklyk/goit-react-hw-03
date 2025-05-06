export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
