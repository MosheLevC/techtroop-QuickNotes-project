import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import { Modal, Paper } from "@mantine/core";
import NoteModal from "./components/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => setNotes([...notes, newNote]);
  const handleUpdate = (updatedNote) => {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div className="container">
      <Paper shadow="xs" withBorder p="xl" className="note-form" style={{ width: "50%" }}>
        <NoteForm handleOnSubmit={handleAddNote} />
      </Paper>
      <div className="notes">
        {notes.length > 0 &&
          notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              selectedNote={note}
              handleRemove={() => {
                if (confirm("Are you sure you want to delete this note?")) {
                  setNotes(notes.filter((currentNote) => currentNote.id !== note.id));
                }
              }}
              handleUpdate={handleUpdate}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
