import axios from "../axios";

const handleLoginService = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const handleGetAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`)
}

const handleCreateUser = (user) => {
    return axios.post(`/api/create-new-user`, user)
}

const handleDeleteUser = (userId) => {
    return axios.delete(`/api/delete-user`, { data: { id: userId } })
}

const updateUser = (user) => {
    return axios.put(`/api/edit-user`, user)
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

export {
    handleLoginService,
    handleGetAllUsers,
    handleCreateUser,
    handleDeleteUser,
    updateUser,
    getAllCodeService
}