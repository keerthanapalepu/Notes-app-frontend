import { useState } from "react";

const AddNote = (props) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      props.handleClick(noteText);
    }
    setNoteText("");
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        onChange={handleChange}
        value={noteText}
        placeholder="type to add a note"
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining </small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
