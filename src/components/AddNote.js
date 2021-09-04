import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

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
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <MenuWrapper>
        <MenuButtons>
        <Button
          text={important ? 'important ✓' : 'important ✗'}
          background={important ? '#fd5d9a': ''}
          borderColor={important ? '#fd5d9a' : ''}
          checked={important}
          onChange={(e) => setImportant(e.currentTarget.checked)}
          onClick={() => toggleImportant()}
        />
        <Button 
          type='submit'
          text='save note'
          onClick={onSubmit}
        />
        </MenuButtons>
      </MenuWrapper>
    </form>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem 0;
  margin: 0;
`;

const MenuButtons = styled.div`
  margin-top: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`


export default AddNote;