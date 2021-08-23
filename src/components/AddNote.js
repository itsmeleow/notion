import React from "react";
import { useState } from "react";
import Button from './Button'

const AddNote = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [important, setImportant] = useState(false)

  const toggleImportant = () => {
    setImportant(!important)
  }

  const onSubmit = (e) => {
      e.preventDefault()

      if (!text) {
          return
      }
      let date = new Date().toLocaleString()
      onAdd({ text, date, important })
      const logInfo = {
        text,
        date,
        important
      }
      console.log(JSON.stringify(logInfo))
      setText('')
  }
 
  return (
    <form className="add-form">
      <div className="form-control">
        <textarea 
          type="text"
          rows={5}
          cols={5}
          placeholder="type something..."
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </div>
      <Button
        text={important ? 'important ✓' : 'important ✗'}
        background={important ? '#ff65b2': '#000000'}
        borderColor={important ? '#ff71b8' : '#373737'} //black: #434751 (pink: #ff71b8)
        checked={important}
        onChange={(e) => setImportant(e.currentTarget.checked)}
        onClick={() => toggleImportant()} />
      <Button 
        type='submit'
        text='save note'
        onClick={onSubmit} />
    </form>
  )
}

export default AddNote;
