import { Button, Paper, TextInput } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";

const NoteForm = ({ handleOnSubmit }) => {
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", category: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Paper shadow="xs" withBorder p="xl" className="note-form">
      <TextInput name="title" placeholder="title" />
      <textarea name="body"></textarea>
      <Button
        onClick={() =>
          handleOnSubmit({
            id: crypto.randomUUID(),
            title: currentNote.title,
            body: currentNote.body,
            category: currentNote.category,
            createdAt: dayjs(),
            updatedAt: null,
          })
        }
        variant="default"
        fullWidth
      >
        Add
      </Button>
    </Paper>
  );
};
export default NoteForm;
