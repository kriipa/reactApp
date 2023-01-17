// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
// import Feedback from "./compotents/feedback";
import axios from 'axios';

function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] =  useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then(response => {
      console.log(response.data)
      setNotes(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  const notesToShow = showAll 
  ? notes
  : notes.filter(n => n.important === true)

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    console.log(event.target)

    //create a note object
    const note = {
      id: notes.length + 1,
      content: newNote,
      date : new Date().toISOString(),
      important: Math.random() < 0.5
    }

    if(newNote !== '') setNotes(notes.concat(note))
    setNewNote('')
  }

  return (
    <div>
      <h2> NOtes </h2>
      <button onClick={() => setShowAll(!showAll)}>
        toggle
      </button>
      <ul> 
        {notesToShow.map( note => 
          <li key={note.id}> 
            <p>{note.content}</p> 
            <p> {note.date}</p> 
          </li>
        )}
      </ul>
      <form> 
        <input value = {newNote} onChange = {handleChange}/> 
          <button onClick={handleAdd}> add </button> 
      </form>
    </div>
  );
}

export default App;
