import axios from "axios";

let axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
)
const getUsers = () => axiosInstance.get('/users')
const getPosts = (id) => axiosInstance.get(`/users/${id}/posts`)



export {getUsers,getPosts}