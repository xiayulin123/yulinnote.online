import { Button } from 'react-bootstrap'
import styles from '../styles/Node.module.css'
interface NavBarLoggedOutViewProps {
  onSignUpClicked: () => void
  onLoginClicked: () => void
}

const NavBarLoggedOutView = ({
  onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedOutViewProps) => {
  return (
    <>
      <Button
        className={`${styles['custom-button']} ${styles['custom-button-secondary']}`}
        onClick={onSignUpClicked}>
        Sign Up
      </Button>
      <Button
        className={`${styles['custom-button']} ${styles['custom-button-secondary']}`}
        onClick={onLoginClicked}>
        Log In
      </Button>
    </>
  )
}

export default NavBarLoggedOutView
