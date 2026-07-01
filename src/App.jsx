import { useState } from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import Note from "./Note";

function App() {
  const [currentNote, setCurrentNote] = useState({ id: null, date: null, title: "", body: "", category: "" });
  const [notes, setNotes] = useState([{ body: "ggfd" }]);

  return (
    <div className="container">
      <NoteForm
        title={currentNote.title}
        body={currentNote.body}
        category={currentNote.category}
        handleOnSubmit={(newNote) => {
          setNotes([...notes, newNote]);
        }}
      />
      <Note body={notes[0].body} />
    </div>
  );
}

export default App;
