import { useState } from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="container">
      <NoteForm
        handleOnSubmit={(newNote) => {
          setNotes([...notes, newNote]);
        }}
      />
      {notes.length > 0 && <Note body={notes[0].body} />}
    </div>
  );
}

export default App;
