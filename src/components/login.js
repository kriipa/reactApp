import { Col } from "reactstrap";

import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nameStatus ] = useState(false)    
    const navigate = useNavigate()
    
    const handleLogin = (e)  => {
        e.preventDefault()
        userService.loginUser({username, password})
            .then(res => {
                console.log(res.data)
                window.localStorage.setItem('token', res.data.token)
                window.alert(res.data.status)
                // redirect the user
                navigate('/books')
            }).catch(err => {
                window.alert(err.response.data.err)
            })
    }
    return(
        <div className="container"> 
            <h2> Login form </h2>

            <Form onSubmit={handleLogin}>
                <FormGroup >
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

                <Button color="primary">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;