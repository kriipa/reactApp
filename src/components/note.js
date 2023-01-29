const Note = (props) => {
    const { note,handleDelete, handleImportance } = props
    return(
        <li> 
            <p>{note.content}</p> 
            <p> {note.date}</p> 
            <button onClick={() => handleDelete(note.id)}>
                delete
            </button>
            <button onClick={() => handleImportance(note.id)}>
                {note.important 
                ===false ? 'set important' 
                : 'set not important'}
            </button>
        </li>
    )
}

export default Note;