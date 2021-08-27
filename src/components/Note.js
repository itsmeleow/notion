const Note = ({ notes, onDelete, onPin }) => {
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id} 
          note={note} 
          onDelete={onDelete} 
          onPin={onPin}
          className={`event ${note.important ? 'important' : ''}`}
          onDoubleClick={() => onDelete(note.id)}
          onClick={() => onPin(note.id)}>
            <code>{note.date}</code>
            <p>{note.text}</p>
        </div>
      ))}
    </>
  );
};


export default Note;