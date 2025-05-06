import css from "./Contact.module.css";
export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.li}>
      <span>
        {name}: {number}
      </span>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
