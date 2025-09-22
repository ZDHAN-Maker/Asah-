import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const note = notesData.find((n) => n.id === parseInt(id));

  if (!note) return <p>Catatan tidak ditemukan</p>;

  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createdAt">{note.createdAt}</p>
      <p className="detail-page__body">{note.body}</p>

      <div className="detail-page__action">
        <Link to="/" className="action">✓</Link>
      </div>
    </div>
  );
}
