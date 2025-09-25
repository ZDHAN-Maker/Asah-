// component/noteitem.jsx
import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="note-item">
      <Link to={`/notes/${id}`} className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">
          {new Date(createdAt).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="note-item__body">{body}</p>
      </Link>
    </div>
  );
}

export default NoteItem;
