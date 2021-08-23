import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import AddNote from "./components/AddNote"

function App() {
  const [notes, setNotes] = useState([
    {
      id: 'nn00qvbg61',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis sit amet velit eu cursus. Morbi venenatis convallis magna in varius.",
      date: "8/18/2021, 10:59:59 PM",
      important: false
    }
  ])

  const addNote = (note) => {
    const id = Math.random().toString(36).substr(2, 10)
    const newNote = { id, ...note}
    setNotes([newNote, ...notes])
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
      <div className="body">
      <Header />
      <AddNote 
        onAdd={addNote}/>
      {notes.length > 0 ? (
        <Notes 
          notes={notes} 
          onDelete={deleteNote} 
          onPin={pinNote} />) : ("No Notes: Create some to get started!")}
      <Footer />
    </div>
  )
}

export default App;
