import { CloseButton, Flex, Paper, Text } from "@mantine/core";

const Note = ({ id, createdAt, title, body, category, handleRemove }) => {
  return (
    <Paper shadow="xs" withBorder p="xl" className="note">
      <Flex align="center">
        <Text size="xs">{createdAt}</Text>
        <CloseButton onClick={handleRemove} />
      </Flex>
      <Text size="md">{title}</Text>
      <Text size="sm">{body}</Text>
    </Paper>
  );
};
export default Note;
