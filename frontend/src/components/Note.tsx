import React from 'react'
import styles from '../styles/Node.module.css'
import styleUtils from '../styles/utils.module.css'
import { Note as NoteModel } from '../models/note'
import { Card } from 'react-bootstrap'
import { formatDate } from '../utils/formatDate'
import { MdDelete } from 'react-icons/md'
import noteBack2 from '../images/note2.jpg'
interface NotePrps {
  note: NoteModel
  onNoteClicked: (note: NoteModel) => void
  onDeleteNoteClicked: (note: NoteModel) => void
  className?: string
}

const Note = ({
  note,
  onNoteClicked,
  onDeleteNoteClicked,
  className,
}: NotePrps) => {
  const { title, text, createdAt, updatedAt } = note

  let createdUpdatedText: string
  if (updatedAt > createdAt) {
    createdUpdatedText = 'Updated: ' + formatDate(updatedAt)
  } else {
    createdUpdatedText = 'Created: ' + formatDate(createdAt)
  }

  return (
    <Card
      className={`${styles.noteCard} ${className}`}
      onClick={() => onNoteClicked(note)}
      style={{
        width: '375px',
        height: '175px',

        backgroundImage: `url(${noteBack2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}>
      <Card.Body className={styles.cardBody}>
        <Card.Title
          className={styleUtils.flexCenter}
          style={{ fontWeight: 'bold' }}>
          {title}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note)
              e.stopPropagation()
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText} style={{ fontWeight: 'bold' }}>
          {text}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-muted" style={{ fontWeight: 'bold' }}>
        {createdUpdatedText}
      </Card.Footer>
    </Card>
  )
}

export default Note
