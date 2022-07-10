import "./styles.css";
import Search from "./components/Search";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { useState , useEffect} from "react";
import { nanoid } from "nanoid";
import axios from "axios";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setState] = useState([
    {
      _id: "",
      id: "",
      text: "",
      date: ""
    },
  ]);

  const getNotes = async () =>
    {
      var response = fetch('http://localhost:8080/notes')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
          setState(myJson);
          });
    }
  useEffect(() => {
    getNotes();
  }, []);

  const postNotes = async(newNote) => {
      await axios.post("http://localhost:8080/notes", {id: newNote.id,text: newNote.text,date: newNote.date});
  }

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    postNotes(newNote)
    const newNotes = [...notes, newNote];
    setState(newNotes);
  };

  const deleteNotes = async (_id) => {

    await axios.delete("http://localhost:8080/notes/"+_id);
}
  const deleteNote = (id,_id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    deleteNotes(_id);
    setState(newNotes);
  };
  return (
    <div className={darkMode ? "dark-mode" : "null"}>
      <div className="container">
        <Header handleToggle={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleClick={addNote}
          handleDelete={deleteNote}
        />
      </div>
    </div>
  );
}
