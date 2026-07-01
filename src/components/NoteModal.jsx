import { Modal } from "@mantine/core";
import NoteForm from "./NoteForm";

const NoteModal = ({ opened, close, selectedNote, handleUpdate }) => {
  return (
    <Modal
      styles={{
        title: { color: "var(--mantine-color-black)" },
      }}
      opened={opened}
      onClose={close}
      withCloseButton={false}
    >
      <div className="note-form">
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
