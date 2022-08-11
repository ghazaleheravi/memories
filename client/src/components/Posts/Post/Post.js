import React, { Component } from "react";

class Post extends Component {
  render() {
    //console.log('props ', this.props)
    return (
      <div className="post-container">
        <h3>{this.props.title}</h3>
        <p>by: {this.props.creator}</p>
        <p>{this.props.message}</p>
        <p>{this.props.createdAt.split('T')[0]}</p>
        <img src={this.props.file} />
        <p>like {this.props.likeCount}</p>
      </div>
    );
  }
}

export default Post;