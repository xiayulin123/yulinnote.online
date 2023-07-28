const NotesPageLoggedOutView = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'lightgray',
          padding: '20px',
          borderRadius: '5px',
        }}>
        <p style={{ color: 'black', fontWeight: 'bold' }}>
          Please login to see your notes
        </p>
      </div>
    </div>
  )
}

export default NotesPageLoggedOutView
