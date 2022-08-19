import React, { Component } from "react";
import moment from 'moment';

class Post extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      showMore: false,
    };
  }

  upperCase = (str) => {
    if (str) {
      return str[0].toUpperCase() + str.slice(1);
    } 
    return str;
  }

  render() {
    //console.log('props ', this.props)
    return (
      <div className="post-container">
        <div className="post-header">
          <img 
            src={this.props.file} 
            height={200} 
            className="image"
          />
          <p className="location">{this.upperCase(this.props.location)}</p>
          <p className="creator">Created by: {this.upperCase(this.props.creator)}</p>
        </div>
        <div className="tags">{this.props.tags.map(tag => ('#' + tag + ' '))}</div>
        <div className="message">
          {this.state.showMore ? this.props.message : this.props.message.substring(0, 55)}
          {this.props.message.length >= 55 ? 
            <button 
              className="showMore-btn"
              onClick={() => {this.setState(prevState => ({
                showMore: !(prevState.showMore),
              }))
              console.log(this.state.showMore)}}
            >
              {this.state.showMore ? "Show Less" : "Show More"}
            </button> : null
          }
        </div>
        
        <p className="createdAt">{moment(this.props.createdAt).fromNow()}</p>
        
        <div className="buttons">
          <button className="like">Like {this.props.likeCount}</button>
          <button className="delete">Delete</button>
        </div>  
      </div>
    );
  }
}

export default Post;