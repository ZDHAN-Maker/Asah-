import NoteItem from "./notesitem";

export default function noteslist({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}
