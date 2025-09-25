import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

export default function AddNewPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim() && !body.trim()) {
      alert("Judul atau isi catatan tidak boleh kosong!");
      return;
    }

    // simpan catatan baru
    addNote({ title, body });

    // arahkan ke halaman utama
    navigate("/");
  };

  return (
    <div className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        type="text"
        placeholder="Judul Catatan ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="add-new-page__input__body"
        placeholder="Tulis catatanmu di sini ..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="add-new-page__action">
        {/* Tombol Simpan */}
        <button className="action" onClick={handleSave} title="Simpan Catatan">
          <span className="material-symbols-outlined">check</span>
        </button>

        {/* Tombol Batal */}
        <Link to="/" className="action" title="Batal">
          <span className="material-symbols-outlined">close</span>
        </Link>
      </div>
    </div>
  );
}
