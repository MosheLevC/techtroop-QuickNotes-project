import { Button, Paper, TextInput, Select } from "@mantine/core";
import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { CATEGORIES } from "../constants/categories";
dayjs.extend(advancedFormat);

const NoteForm = ({ handleOnSubmit, isEdit, selectedNote }) => {
  const [currentNote, setCurrentNote] = useState(selectedNote || { title: "", body: "", category: "None" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <>
      <TextInput name="title" label="title" size="md" value={currentNote.title} onChange={handleChange} />
      <Select
        label="Category"
        data={Object.keys(CATEGORIES)}
        value={currentNote.category || "None"}
        onChange={(value) =>
          setCurrentNote((prevNote) => ({
            ...prevNote,
            category: value,
          }))
        }
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
          handleOnSubmit({
            ...currentNote,
            id: isEdit ? selectedNote.id : crypto.randomUUID(),
            title: currentNote.title,
            body: currentNote.body,
            category: currentNote.category || "None",
            createdAt: isEdit ? selectedNote.createdAt : dayjs().format("MMM Do YYYY hh:mm A"),
            updatedAt: isEdit ? dayjs().format("MMM Do YYYY hh:mm A") : null,
          });
          if (!isEdit) {
            setCurrentNote({ title: "", body: "", category: "None" });
          }
        }}
        disabled={
          !currentNote.body || (isEdit && JSON.stringify(currentNote) === JSON.stringify(selectedNote))
        }
        variant="default"
        fullWidth
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </>
  );
};
export default NoteForm;
