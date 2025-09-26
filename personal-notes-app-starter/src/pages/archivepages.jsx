import React, { useState } from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NotesList from '../component/noteslist';
import SearchBar from '../component/searchbar';

function ArchivePage() {
  const [keyword, setKeyword] = useState('');
  const archivedNotes = getArchivedNotes();

  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main>
      <h2>Catatan Arsip</h2>

      <SearchBar
        keyword={keyword}
        keywordChange={(value) => setKeyword(value)}
        placeholder='Cari berdasarkan judul ...'
      />

      {filteredNotes.length > 0 ? (
        <div className='notes-list'>
          <NotesList notes={filteredNotes} />
        </div>
      ) : (
        <div className='notes-list-empty'>
          <p className='notes-empty'>Tidak ada catatan</p>
        </div>
      )}
    </main>
  );
}

export default ArchivePage;
