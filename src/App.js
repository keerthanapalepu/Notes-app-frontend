import "./styles.css";
import Search from "./components/Search";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setState] = useState([
    {
      id: nanoid(),
      text: "this is a first notes",
      date: "10/07/2022"
    },
    {
      id: nanoid(),
      text: "this is a second notes",
      date: "10/07/2022"
    },
    {
      id: nanoid(),
      text: "this is a third notes",
      date: "10/07/2022"
    }
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setState(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
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
