import axios from "../axios";

const handleLoginService = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const handleGetAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`)
}

export {
    handleLoginService,
    handleGetAllUsers
}