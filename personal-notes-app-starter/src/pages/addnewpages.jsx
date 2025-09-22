import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNewPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Catatan baru:", { title, body });
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
        <button className="action" onClick={handleSave}>✓</button>
        <Link to="/" className="action">✕</Link>
      </div>
    </div>
  );
}
