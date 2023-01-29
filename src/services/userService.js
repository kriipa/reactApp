import axios from "axios"

const baseUrl = 'http://localhost:3005/users'

const registerUser = (username, password) => {
    return axios.post(`${baseUrl}/register`, 
    {username, password})
}

export default {registerUser}