import React from "react";

const Note = ({ note, onDelete, onPin }) => {
  return (
    <div
      className={`event ${note.important ? 'important' : ''}`}
      onDoubleClick={() => onDelete(note.id)}
      onClick={() => onPin(note.id)}>
      <code>{note.date}</code>
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
