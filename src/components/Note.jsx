import { CloseButton, Flex, Paper, Text } from "@mantine/core";

const Note = ({ id, createdAt, title, body, category, handleRemove }) => {
  return (
    <Paper shadow="xs" withBorder p="xl" className="note">
      <Flex align="center" justify="space-between">
        <Text size="xs">{createdAt}</Text>
        <CloseButton onClick={handleRemove} />
      </Flex>
      <Text size="md" fw="bold">
        {title}
      </Text>
      <Text size="sm">{body}</Text>
    </Paper>
  );
};
export default Note;
