import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Note } from '../models/note'
import { NoteInput } from '../network/notes_api'
import { useForm } from 'react-hook-form'
import * as NotesApi from '../network/notes_api'
import TextInputField from './folder/TextInputField'
import note1 from '../images/note1.jpg'
interface AddEditNoteDialogProps {
  noteToEdit?: Note
  onDismiss: () => void
  onNoteSaved: (note: Note) => void
}

const AddEditNoteDialog = ({
  noteToEdit,
  onDismiss,
  onNoteSaved,
}: AddEditNoteDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || '',
      text: noteToEdit?.text || '',
    },
  })
  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: Note
      if (noteToEdit) {
        noteResponse = await NotesApi.updateNote(noteToEdit._id, input)
      } else {
        noteResponse = await NotesApi.createNote(input)
      }

      onNoteSaved(noteResponse)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header
        closeButton
        style={{
          backgroundColor: '#81a1bc',
          borderColor: '#81a1bc',
        }}>
        <Modal.Title style={{ fontWeight: 'bold' }}>
          {noteToEdit ? 'Edit note' : 'Add note'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: '#81a1bc',
        }}>
        <Form id="addEditNoteForm" onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            name="title"
            label="Title"
            type="text"
            placeholder="Title"
            register={register}
            registerOptions={{ required: 'Required' }}
            error={errors.title}
          />
          <TextInputField
            name="text"
            label="Text"
            as="textarea"
            row={5}
            placeholder="Text"
            register={register}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{ backgroundColor: '#81a1bc', borderColor: '#81a1bc' }}>
        <Button
          type="submit"
          form="addEditNoteForm"
          disabled={isSubmitting}
          style={{ backgroundColor: '#81b1ac', borderColor: '#81b1ac' }}>
          save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddEditNoteDialog
