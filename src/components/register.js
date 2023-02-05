import { Form, FormFeedback } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Col } from "reactstrap";
import { Input } from "reactstrap";
import { Button } from "reactstrap";
import userService from '../services/userService';
import { useState, useEffect } from "react";


function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [status, setStatus] = useState(false)
    const [nameStatus, setNameStatus] = useState(false)

    useEffect (() => setStatus (password !== confirmPassword
            ? true
            : false)
            , [confirmPassword, password])
            
        useEffect(() => setNameStatus (username.length <6 
            ? true
            : false)
            , [username]) 

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
        <h2> React practice </h2>
        <Form onSubmit={handleRegister}> 
            <FormGroup row >
                <Label for="username" sm={2}>
                    Username
                </Label>
                <Col sm={10}>
                <Input  invalid={nameStatus}
                    id="username"
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
        
        <FormGroup row >
            <Label for="confirmPassword" sm={2}>
                Username
            </Label>
            <Col sm={10}>
            <Input invalid={status}
                id="confirmPassword"
                name="confirmPassword"
                placeholder=" Confirm password"
                type="password"
                value = {confirmPassword}
                onChange = {(event) => {
                    setConfirmPassword(event.target.value)
                }}
            />
            <FormFeedback>
                password does not match
            </FormFeedback>
            </Col>
        </FormGroup>
        <Button color="primary">
            Register
        </Button>
        </Form>
    </div>
    );
}


export default Register;