import React, { Component } from "react";

class Post extends Component {
  render() {
    //console.log('props ', this.props)
    return (
      <div className="post">
        <h3>{this.props.title}</h3>
        <p>by: {this.props.creator}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Post;