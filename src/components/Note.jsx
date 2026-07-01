import { CloseButton, Flex, Paper, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NoteModal from "./NoteModal";

const Note = ({ selectedNote, handleRemove, handleUpdate }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { title, body, createdAt } = selectedNote;

  return (
    <Paper
      shadow="xs"
      withBorder
      p="md"
      className="note"
      onClick={open}
      style={{ cursor: "pointer" }}
    >
      <NoteModal
        opened={opened}
        close={close}
        selectedNote={selectedNote}
        handleUpdate={handleUpdate}
      />
      <Flex align="center" justify="space-between">
        <Text size="xs">{createdAt}</Text>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            handleRemove();
          }}
        />
      </Flex>
      <Text size="md" fw="bolder" truncate>
        {title}
      </Text>
      <Text size="sm" lineClamp={title ? 4 : 5}>
        {body}
      </Text>
    </Paper>
  );
};
export default Note;
