import { CloseButton, Flex, Paper, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NoteModal from "./NoteModal";

const Note = ({ selectedNote, handleRemove, handleUpdate }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { title, body, createdAt, updatedAt } = selectedNote;

  return (
    <>
      <NoteModal opened={opened} close={close} selectedNote={selectedNote} handleUpdate={handleUpdate} />
      <Paper shadow="xs" withBorder p="md" className="note" onClick={open} style={{ cursor: "pointer" }}>
        <Flex align="center" justify="space-between">
          <div>
            <Text style={{ fontSize: "9px" }} c="dimmed">
              Created: {createdAt}
            </Text>
            {selectedNote.updatedAt && (
              <Text style={{ fontSize: "9px" }} c="dimmed">
                Updated: {updatedAt}
              </Text>
            )}
          </div>
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
    </>
  );
};
export default Note;
