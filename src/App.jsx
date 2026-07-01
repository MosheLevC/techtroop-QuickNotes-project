import { useState } from "react";
import "./App.css";
import NoteForm from "./NoteForm";

function App() {
  const [currentNote, setCurrentNote] = useState({ id: null, title: "", body: "", category: "" });
  const [notes, setNotes] = useState({});

  return (
    <div className="container">
      <NoteForm
        title={currentNote.title}
        body={currentNote.body}
        category={currentNote.category}
        handleOnSubmit={(newNote) => {
          setNotes(newNote);
        }}
      />
    </div>
  );
}

export default App;
