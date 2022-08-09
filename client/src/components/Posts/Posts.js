import React, { Component } from "react";
import Post from './Post/Post';
import { fetchPosts } from "../../api";

class Posts extends Component {
  
  render() {
    return (
      <div className="posts-container"> 
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Posts;