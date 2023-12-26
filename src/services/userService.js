import axios from "../axios";

const handleLoginService = (email, password) => {
    return axios.post('/api/login', { email, password })
}

export {
    handleLoginService
}