import { Button, Paper, TextInput } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const NoteForm = ({ handleOnSubmit, isEdit, selectedNote }) => {
  const [currentNote, setCurrentNote] = useState(selectedNote || { title: "", body: "", category: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <>
      <TextInput
        name="title"
        placeholder="title"
        size="md"
        value={currentNote.title}
        onChange={handleChange}
      />
      <textarea
        className="note-text"
        name="body"
        placeholder="My note..."
        value={currentNote.body}
        onChange={handleChange}
      />
      <Button
        onClick={() => {
          if (currentNote.body) {
            handleOnSubmit({
              ...currentNote,
              id: isEdit ? selectedNote.id : crypto.randomUUID(),
              title: currentNote.title,
              body: currentNote.body,
              category: currentNote.category,
              createdAt: isEdit ? selectedNote.createdAt : dayjs().format("MMM Do YYYY hh:mm A"),
              updatedAt: isEdit ? dayjs().format("MMM Do YYYY hh:mm A") : null,
            });
            if (!isEdit) {
              setCurrentNote({ title: "", body: "", category: "" });
            }
          }
        }}
        disabled={!currentNote.body}
        variant="default"
        fullWidth
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </>
  );
};
export default NoteForm;
