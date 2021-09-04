import { useState } from "react";
import Note from "../components/Note";
import AddNote from "../components/AddNote";

const Notes = () => {
    const [notes, setNotes] = useState([
        {
          id: 'w6ikv43',
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis sit amet velit eu cursus. Morbi venenatis convallis magna in varius.",
          date: "8/18/2021, 10:59:59 PM",
          important: false
        }
      ])
    
      const addNote = (note) => {
        const id = Math.random().toString(36).substr(2, 7)
        const newNote = { id, ...note}
        setNotes([newNote, ...notes])
        console.log(newNote)
      }
    
      const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
      }
    
      const pinNote = (id) => {
        setNotes(
          notes.map((note) =>
            note.id === id ? { ...note, important: !note.important } : note
          )
        )
      }

    return (
        <>
          <AddNote onAdd={addNote}/>
          {notes.length > 0 ? (
            <Note 
              notes={notes} 
              onDelete={deleteNote} 
              onPin={pinNote} 
            />
          ) : <code>No Notes: Create some to get started!</code>}
        </>
    )
}


export default Notes