import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { showFormattedDate } from '../utils';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data';

export default function DetailPages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchedNote = getNote(id);
    setNote(fetchedNote);
  }, [id]);

  if (!note) {
    return (
      <main className='detail-page'>
        <h2 className='detail-page__title'>Catatan tidak ditemukan</h2>
      </main>
    );
  }

  const handleToggleArchive = () => {
    if (note.archived) {
      unarchiveNote(note.id);
      navigate('/');
    } else {
      archiveNote(note.id);
      navigate('/archive');
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Apakah Anda yakin ingin menghapus catatan ini?'
    );
    if (confirmDelete) {
      deleteNote(note.id);
      navigate('/');
    }
  };

  return (
    <main className='detail-page'>
      <div>
        <h2 className='detail-page__title'>{note.title}</h2>
        <p className='detail-page__createdAt'>
          {showFormattedDate(note.createdAt)}
        </p>
        <div className='detail-page__body'>{note.body}</div>
      </div>

      <div className='detail-page__action'>
        <button
          className='action'
          onClick={handleToggleArchive}
          title={note.archived ? 'Pindahkan ke Aktif' : 'Arsipkan'}
        >
          <span className='material-symbols-outlined'>
            {note.archived ? 'unarchive' : 'archive'}
          </span>
        </button>

        <button className='action' onClick={handleDelete} title='Hapus Catatan'>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </div>
    </main>
  );
}
