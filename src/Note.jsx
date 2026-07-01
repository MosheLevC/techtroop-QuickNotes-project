import { Paper, Text } from "@mantine/core";

const Note = ({ id, createdAt, title, body, category }) => {
  return (
    <Paper shadow="xs" withBorder p="xl" className="note">
      <Text size="xs">{createdAt}</Text>
      <Text size="md">{title}</Text>
      <Text size="sm">{body}</Text>
    </Paper>
  );
};
export default Note;
