import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

//getPosts: is a callback function that executes everytime someone visit localhost5000/ 
router.get('/', getPosts);
router.post('/', createPosts);

export default router;