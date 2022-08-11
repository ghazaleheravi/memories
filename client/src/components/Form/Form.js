import React, { Component } from "react";
import { connect } from 'react-redux';
import { postSelector } from '../../selectors';
import { createPost } from '../../actions/posts';
//import FileBase from 'react-file-base64';

class Form extends Component {  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(createPost(this.props.post));
  }

  render() {
    //console.log( 'posts ', this.props.posts)
    return (
      <div className="form-container">
        <h4>Create New Memory</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <label forhtml='title'>Title:</label>
          <input 
            id='title' 
            name="title" 
            value={this.props.title} 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_TITLE', payload: e.target.value})
            }
          />
          <label forhtml='creator'>Creator:</label>
          <input 
            id='creator' 
            name="creator" 
            value={this.props.creator} 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_CREATOR', payload: e.target.value})
            }
          />
          <label forhtml='message'>Message:</label>
          <input 
            id='message' 
            name="message" 
            value={this.props.message} 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_MESSAGE', payload: e.target.value})
            }
          />
          <div>
            <label forhtml="file">Choose file to upload</label>
            <input 
              id='file' 
              name="file"
              type="file" 
              value={this.props.file} 
              onChange={(e) => 
                this.props.dispatch({ type: 'CHANGE_FILE', payload: e.target.value})
              }
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

//this is called whenever global state change
const mapStateToProps = (state) => {
  console.log('Global State ', state);
  return {
    //posts: state.posts,
    post: {
      title: state.post.title,
      message: state.post.message,
      creator: state.post.creator,
      file: state.post.file,
    }
  };
};


export default connect(mapStateToProps)(Form);