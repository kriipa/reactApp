import { useEffect, useState } from "react"
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap"
import bookService from "../services/bookService"
import { Form, FormGroup, Label, Col, Input, nameStatus } from "reactstrap"

function Book({books, setBooks}) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [nameStatus ] = useState(false)    


    const handleAdd =(e) =>{
        e.preventDefault()
        console.log(author,title)
        bookService.create({title, author})
        .then((res) => {
            setBooks(books.concat(res.data))
            setAuthor('')
            setTitle('')
        })
        .catch((err) => console.log(err))
    }
    // const handleDelete = (id) => {

    // }
    useEffect(() => {
        bookService.getAll()
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            }).catch(err => console.log(err))
    }, [])
    return (
        <div> 
            <h2> List of books </h2>
            <ListGroup>
                {books.map(book => {
                    return (
                        <ListGroupItem>
                        <ListGroupItemHeading>
                            {book.title}
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            {book.author}
                            <Button color="danger">
                                Delete
                            </Button>
                        </ListGroupItemText>
                    </ListGroupItem>
                    )
                })}
            </ListGroup>
            { ' '}
            <Form onSubmit={handleAdd}>
                <FormGroup >
                        <Label for="title" sm={2}>
                            Title
                        </Label>
                        <Col sm={10}>
                        <Input  invalid={nameStatus}
                            id="title"
                            name="title"
                            placeholder=" Enter Title"
                            type="text"
                            value = {title}
                            onChange = {(event) => setTitle(event.target.value)}
                        />
                        </Col>
                </FormGroup>
                <FormGroup >
                        <Label for="author" sm={2}>
                            Author
                        </Label>
                        <Col sm={10}>
                        <Input  invalid={nameStatus}
                            id="author"
                            name="author"
                            placeholder=" Enter Author"
                            type="text"
                            value = {author}
                            onChange = {(event) => setAuthor(event.target.value)}
                        />
                        </Col>
                </FormGroup>
            <button> Add Book</button>
            </Form>
        </div>
        
    )
}

export default Book