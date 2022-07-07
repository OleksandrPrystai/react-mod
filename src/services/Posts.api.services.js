import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const getAlbums = () => axiosInstance(`/albums`)
const getTodos = () => axiosInstance(`/todos`)
const getComments = () => axiosInstance(`/comments`)
const getPosts = (id) => axiosInstance(`/posts/${id}`)

export {getPosts,getComments,getTodos,getAlbums}