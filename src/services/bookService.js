import axios from "axios";

const baseUrl = 'http://localhost:3005/books'
const config = {
    headers: {
        Authorization: `bearer ${window.localStorage.getItem('token')}`
    }
} 
function getAll() {
    return axios.get(baseUrl, config)
}
function create(newBook) {
    return axios.post(baseUrl, newBook, config)
}

function remove(book_id) {
    return axios.delete(`${baseUrl}/${book_id}`, config)
}

export default {getAll, create, remove}