import React, { Component } from "react";
import { connect } from 'react-redux';
import Post from './Post/Post';
import { getPosts } from "../../actions/posts";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    console.log('posts ', this.props.posts)
    return (
      !this.props.posts.length ? 'nothing found' :
      <div className="posts-container"> 
       {this.props.posts.map(post => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Posts);