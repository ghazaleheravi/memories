import * as api from "../api";

// Action Creators
export const getPosts = () => {
  return async (dispatch) => {
    const { data } = await api.getPosts();
    //console.log('data ',data);
    dispatch({ type: 'GET_POSTS', payload: data})
  }
}
 
export const createPost = (post) => {
  return async (dispatch) => {
    await api.createPost(post);
    dispatch({ type: 'CREATE_POST', payload: post });
  }
}


