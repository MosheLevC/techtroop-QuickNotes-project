import { Button, Paper, TextInput } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";

const NoteForm = ({ handleOnSubmit }) => {
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", category: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <Paper shadow="xs" withBorder p="xl" className="note-form">
      <TextInput name="title" placeholder="title" value={currentNote.title} onChange={handleChange} />
      <textarea name="body" value={currentNote.body} onChange={handleChange}></textarea>
      <Button
        onClick={() => {
          if (currentNote.body) {
            handleOnSubmit({
              id: crypto.randomUUID(),
              title: currentNote.title,
              body: currentNote.body,
              category: currentNote.category,
              createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
              updatedAt: null,
            });
            setCurrentNote({ title: "", body: "", category: "" });
          }
        }}
        disabled={!currentNote.body}
        variant="default"
        fullWidth
      >
        Add
      </Button>
    </Paper>
  );
};
export default NoteForm;
