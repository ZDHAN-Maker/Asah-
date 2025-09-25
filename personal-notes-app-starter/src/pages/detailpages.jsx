import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";

export default function DetailPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = getNote(id);

  if (!note) {
    return (
      <main className="detail-page">
        <h2 className="detail-page__title">Catatan tidak ditemukan</h2>
      </main>
    );
  }

  const handleToggleArchive = () => {
    if (note.archived) {
      unarchiveNote(note.id);
      navigate("/");
    } else {
      archiveNote(note.id);
      navigate("/archive");
    }
  };

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  return (
    <main className="detail-page">
      <div>
        <h2 className="detail-page__title">{note.title}</h2>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="detail-page__body">{note.body}</div>
      </div>

      <div className="detail-page__action">
        {/* Tombol Arsip / Unarchive */}
        <button
          className="action"
          onClick={handleToggleArchive}
          title={note.archived ? "Pindahkan ke Aktif" : "Arsipkan"}
        >
          <span className="material-symbols-outlined">
            {note.archived ? "unarchive" : "archive"}
          </span>
        </button>

        {/* Tombol Hapus */}
        <button className="action" onClick={handleDelete} title="Hapus Catatan">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </main>
  );
}
