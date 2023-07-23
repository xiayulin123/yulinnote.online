import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import styles from './styles/NotesPage.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Note as NoteModel } from './models/note'
import Note from './components/Note'
import * as NotesApi from './network/notes_api'
import AddNoteDialog from './components/AddNoteDialog'
function App() {
  const [notes, setNotes] = useState<NoteModel[]>([])

  const [showAddNote, setShowAddNote] = useState(false)

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes()
        setNotes(notes)
      } catch (error) {
        console.error(error)
        alert(console.error())
      }
    }
    loadNotes()
  }, [])

  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
      {showAddNote && <AddNoteDialog />}
    </Container>
  )
}

export default App
