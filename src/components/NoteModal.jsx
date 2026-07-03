import { Modal, Text, Title } from "@mantine/core";
import NoteForm from "./NoteForm";

const NoteModal = ({ opened, close, selectedNote, handleUpdate }) => {
  return (
    <Modal opened={opened} onClose={close} withCloseButton={false}>
      <div className="note-form">
        <Title c="dimmed">
          <Text>Created: {selectedNote.createdAt}</Text>
          {selectedNote.updatedAt && <Text>Updated: {selectedNote.updatedAt}</Text>}
        </Title>
        <NoteForm
          key={selectedNote?.id}
          handleOnSubmit={(updatedNote) => {
            handleUpdate(updatedNote);
            close();
          }}
          isEdit
          selectedNote={selectedNote}
        />
      </div>
    </Modal>
  );
};

export default NoteModal;
