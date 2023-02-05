import axios from "axios"

const baseUrl = 'http://localhost:3005/users'

const registerUser = (username, password) => {
    return axios.post(`${baseUrl}/register`, 
    {username, password})
}

const loginUser = (Credentials) => {
    return axios.post(`${baseUrl}/login`, Credentials)
}

export default {registerUser, loginUser}