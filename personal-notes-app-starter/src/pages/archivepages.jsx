import React, { useState } from "react";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "../component/noteslist";
import SearchBar from "../component/searchbar";

function ArchivePage() {
  const [keyword, setKeyword] = useState("");
  const archivedNotes = getArchivedNotes();

  // filter catatan berdasarkan judul
  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main>
      <h2>Catatan Arsip</h2>

      {/* Search Bar */}
      <SearchBar
        keyword={keyword}
        keywordChange={(value) => setKeyword(value)}
        placeholder="Cari berdasarkan judul ..."
      />

      {/* List Arsip */}
      {filteredNotes.length > 0 ? (
        // Gunakan kelas notes-list yang sudah Anda definisikan
        <div className="notes-list"> 
          <NotesList notes={filteredNotes} />
        </div>
      ) : (
        // Gunakan kelas notes-list-empty yang sudah Anda definisikan
        <div className="notes-list-empty">
          <p className="notes-empty">Tidak ada catatan</p>
        </div>
      )}
    </main>
  );
}

export default ArchivePage;