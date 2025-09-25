// component/noteslist.jsx
import React from "react";
import NoteItem from "./notesitem";

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}

export default NotesList;
