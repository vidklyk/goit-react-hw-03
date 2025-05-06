import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.container}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
