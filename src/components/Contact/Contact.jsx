export default function Contact({ id, name, number, onDelete }) {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
