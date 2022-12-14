import axios from 'axios'

const url = 'http://localhost:5001/posts';

//DON'T PUT THE AXIOS CALLS IN {} LOL
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)