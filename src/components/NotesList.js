import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = (props) => {
  return (
    <div className="notes-list">
      {props.notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            delete={props.handleDelete}
          />
        );
      })}
      <AddNote handleClick={props.handleClick} />
    </div>
  );
};

export default NotesList;
