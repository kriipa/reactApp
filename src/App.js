// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
// import Feedback from "./compotents/feedback";
// import axios from 'axios';
// import Note from './components/note';
// import noteService from "./services/noteService";


// function App() {

//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] =  useState(true)

//   useEffect(() => {
//     noteService.getAllNotes()
//     // axios.get('http://localhost:3001/notes')
//     .then(response => {
//       console.log(response.data)
//       setNotes(response.data)
//     })
//     .catch(err => console.log(err))
//   }, [])

//   const notesToShow = showAll 
//   ? notes
//   : notes.filter(n => n.important === true)

//   const handleChange = (event) => {
//     // console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   const handleAdd = (event) => {
//     event.preventDefault()
//     console.log(event.target)

//     //create a note object
//     const note = {
//       content: newNote,
//       date : new Date().toISOString(),
//       important: Math.random() < 0.5
//     }
//     if(newNote !== ''){
//       // axios.post('http://localhost:3001/notes', note)
//       noteService.createNote(note)
//         .then(response => {
//           setNotes(notes.concat(response.data))
//           setNewNote('')
//         })
//         .catch(err => console.log(err))
//     }
//   }

//   const handleDelete = async(id) => {
//     if(window.confirm(`Are you sure you want to delete? ${id}`)){
//     try{
//       // let response = await axios.delete(`http://localhost:3001/notes/${id}`)
//       await noteService.deleteNote(id)
//       setNotes(notes.filter(n => n.id !== id))
//     }catch (err){
//       console.log('error')
//       }
//     }
//   }

//   const handleImportance = async(id) => {
//     alert(id)
//     //find that note
//     let targetNote = notes.find(n => n.id === id)
//     console.log(targetNote)
//     //change that note to update importance
//     // targetNote.important = !targetNote.important
//     targetNote = {...targetNote, important: !targetNote.important}
//     noteService.changeImportance(id, targetNote)
//     // console.log(targetNote)
//     //put request to restful api
//     // axios.put(`http://localhost:3001/notes/${id}`, targetNote)
//     .then(response => {
//       console.log(response)
//       setNotes(notes.map(n => n.id === id ? response.data : n))
//     }).catch(err => console.log(err))
//     //update to state to render react components
    
//   }

//   return (
//     <div>
//       <h2> NOtes </h2>
//       <button onClick={() => setShowAll(!showAll)}>
//         {showAll 
//         ? 'show important' 
//         : 'show all'}
//       </button>
//       <ul> 
//         {notesToShow.map( note => 
//           <Note 
//           key={note.id} 
//           note={note} 
//           handleDelete={handleDelete}
//           handleImportance={handleImportance}/>
//         )}
//       </ul>
//       <form> 
//         <input value = {newNote} onChange = {handleChange}/> 
//           <button onClick={handleAdd}> add </button> 
//       </form>
//     </div>
//   );
// }

import { Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Col } from "reactstrap";
import { Input } from "reactstrap";
import { Button } from "reactstrap";
import userService from './services/userService';


function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    console.log(username, password)
    userService.registerUser(username, password)
    .then(response => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }

  return (
    <div >
      <h2> furniturezoid </h2>

      <Form onSubmit={handleRegister}> 
        <FormGroup row >
          <Label for="username" sm={2}>
            Username
          </Label>
          <Col sm={10}>
            <Input
              id="usersname"
              name="username"
              placeholder=" Enter Username"
              type="text"
              value = {username}
              onChange = {(event) => setUsername(event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              id="password"
              name="password"
              placeholder="Enter A Strong Password"
              type="password"
              value={password}
              onChange = {(event) => setPassword(event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectGender" sm={2} >
            Select Gender
          </Label>
          <Col sm={10}>
            <Input
              id="selectGender"
              name="selectGender"
              type="select"
            >
              <option>
                male
              </option>
              <option>
                female
              </option>
              <option>
                other
              </option>
              
            </Input>
          </Col>
        </FormGroup>
        <Button color="primary">
          Register
        </Button>
      </Form>
    </div>
  );
}


export default App;
