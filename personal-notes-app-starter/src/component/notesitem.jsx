import { showFormattedDate } from "../utils";

export default function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__body">{body}</div>
    </div>
  );
}
