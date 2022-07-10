import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  const handleDelete = (event) => {
    props.delete(props.id,props._id);
  };
  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <MdDeleteForever
          onClick={handleDelete}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
