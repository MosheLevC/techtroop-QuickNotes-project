import { Paper, Text } from "@mantine/core";

const Note = ({ id, date, title, body, category }) => {
  return (
    <Paper shadow="xs" withBorder p="xl" className="note">
      <Text size="sm">{body}</Text>
    </Paper>
  );
};
export default Note;
