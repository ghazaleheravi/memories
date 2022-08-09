import * as api from "../api";

// Action Creators
 
export const createPost = (post) => {
  return async (dispatch) => {
    const response = await api.createPost(post);
    dispatch({ type: 'ADD_POST', payload: post });
  }
}