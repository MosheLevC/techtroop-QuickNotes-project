import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { Paper, TextInput, Group, Button, Text } from "@mantine/core";
import "./App.css";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import { CATEGORIES } from "./constants/categories";

function App() {
  const [notes, setNotes] = useLocalStorage({
    key: "quicknotes-notes",
    defaultValue: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleAddNote = (newNote) => setNotes([...notes, newNote]);
  const handleUpdate = (updatedNote) => {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "All" || (note.category || "None") === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <Paper shadow="xs" withBorder p="xl" className="note-form" style={{ width: "50%" }}>
        <NoteForm handleOnSubmit={handleAddNote} />
      </Paper>

      <div className="filters-container">
        <TextInput
          placeholder="Search notes by title or content..."
          size="md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Group gap="xs" style={{ flexWrap: "wrap" }}>
          <Button
            size="xs"
            variant={activeCategory === "All" ? "filled" : "outline"}
            color="gray"
            onClick={() => setActiveCategory("All")}
            radius="xl"
          >
            All
          </Button>
          {Object.entries(CATEGORIES).map(([key, config]) => {
            const isActive = activeCategory === key;
            return (
              <Button
                key={key}
                size="xs"
                onClick={() => setActiveCategory(key)}
                radius="xl"
                variant={isActive ? "filled" : "outline"}
                className="category-button"
                style={{
                  "--btn-bg": isActive ? config.color : "transparent",
                  "--btn-border": config.border,
                }}
              >
                {config.label}
              </Button>
            );
          })}
        </Group>
      </div>

      <div className="notes">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
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
          ))
        ) : (
          <Text size="sm" c="dimmed" className="no-notes-text">
            No notes found.
          </Text>
        )}
      </div>
    </div>
  );
}

export default App;
