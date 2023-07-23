import React from 'react'
import { Container } from 'react-bootstrap'
import NotesPageLoggedInView from '../NotesPageLoggedInView'
import NotesPageLoggedOutView from '../NotesPageLoggedOutView'
import styles from '../../styles/NotesPage.module.css'
import { User } from '../../models/user'

interface NotesPageProps {
  loggedInUser: User | null
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
  return (
    <Container className={styles.notePage}>
      <>
        {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLoggedOutView />}
      </>
    </Container>
  )
}

export default NotesPage
