import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function DetailPages({ notes, deleteNote, toggleArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // cari catatan berdasarkan id
  const note = notes.find((note) => note.id === id);

  // jika catatan tidak ditemukan
  if (!note) {
    return (
      <main className="detail-page">
        <h2 className="detail-page__title">Catatan tidak ditemukan</h2>
      </main>
    );
  }

  // handler arsip
  const handleToggleArchive = () => {
    if (typeof toggleArchive === "function") {
      toggleArchive(note.id);
    } else {
      console.error("toggleArchive belum didefinisikan di parent!");
    }
  };

  // handler hapus
  const handleDelete = () => {
    if (typeof deleteNote === "function") {
      deleteNote(note.id);
      navigate("/"); // kembali ke home setelah hapus
    } else {
      console.error("deleteNote belum didefinisikan di parent!");
    }
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

      {/* tombol aksi */}
      <div className="detail-page__action">
        <button
          className="action"
          onClick={handleToggleArchive}
          title={note.archived ? "Pindahkan ke Aktif" : "Arsipkan"}
        >
          <span className="material-symbols-outlined">
            {note.archived ? "unarchive" : "archive"}
          </span>
        </button>

        <button
          className="action"
          onClick={handleDelete}
          title="Hapus Catatan"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </main>
  );
}
