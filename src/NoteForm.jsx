import { Button, Paper, TextInput } from "@mantine/core";

const NoteForm = ({ title, body, category }) => {
  return (
    <Paper shadow="xs" withBorder p="xl" className="note-form">
      <TextInput placeholder="title" value={title} />
      <textarea>{body}</textarea>
      <Button variant="default" fullWidth>
        Add
      </Button>
    </Paper>
  );
};
export default NoteForm;
