import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="container">
      <NoteForm
        handleOnSubmit={(newNote) => {
          setNotes([...notes, newNote]);
        }}
      />
      <div className="notes">
        {notes.length > 0 &&
          notes.map((note) => <Note key={note.id} createdAt={note.createdAt} title={note.title} body={note.body} category={note.category} />)}
      </div>
    </div>
  );
}

export default App;
