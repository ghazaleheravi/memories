import axios from 'axios';

// url to our backend
const url = 'http://localhost:5000/posts';

export const getPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);