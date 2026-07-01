import { Button, Paper, TextInput } from "@mantine/core";
import dayjs from "dayjs";

const NoteForm = ({ id, title, body, category, handleOnSubmit }) => {
  let currentTitle = title;
  let currentBody = body;
  let currentCategory = category;
  return (
    <Paper shadow="xs" withBorder p="xl" className="note-form">
      <TextInput placeholder="title" value={title} />
      <textarea>{body}</textarea>
      <Button
        onClick={() =>
          handleOnSubmit({ id: id ? id : null, date: dayjs(), title: title ? title : "", body: body, category: category ? category : "" })
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
