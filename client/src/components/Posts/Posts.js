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
      <div className="posts-container"> 
        <div>
          {this.props.posts.map(post => (
            <Post key={post._id} {...post} />
          ))}
        </div>
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