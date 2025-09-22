import { useState } from "react";
import { Link } from "react-router-dom";
import NotesList from "../component/noteslist";
import SearchBar from "../component/searchbar";
import {getAllNotes } from "../utils/local-data";

export default function HomePage() {
  const [notes, setNotes] = useState(getAllNotes );
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={search} setKeyword={setSearch} />
      {filteredNotes.length > 0 ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <div className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </div>
      )}

      <div className="homepage__action">
        <Link to="/add" className="action">+</Link>
      </div>
    </main>
  );
}
