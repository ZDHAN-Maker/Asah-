import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxChar = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    addNote(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          maxLength={maxChar}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxChar - title.length}
        </p>
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteForm;
