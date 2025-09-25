import NoteItem from "./notesitem";

export default function NotesList({ notes, deleteNote, toggleArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          deleteNote={deleteNote}
          toggleArchive={toggleArchive}
        />
      ))}
    </div>
  );
}
