import React from "react";
import Note from "./Note";

const Notes = ({ notes, onDelete, onPin }) => {
  return (
    <>
      {notes.map((note) => (
        <Note 
          key={note.id} 
          note={note} 
          onDelete={onDelete} 
          onPin={onPin} />
      ))}
    </>
  );
};

export default Notes;
