import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteItem";
import NoteForm from "./components/NoteForm";
// import style
import "./styles/style.css";

function Index() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [search, setSearch] = useState("");

  //Menambah catatan ke localstorage setiap kali data berubah
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, body) => {
    const newData = {
      id: Date.now(),
      title,
      body,
      archived: false,
      createdAt: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setNotes([newData, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <NoteForm addNote={addNote} />

      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />

      <h2>Arsip</h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default Index;