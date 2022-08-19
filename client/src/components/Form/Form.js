import React, { Component } from "react";
import { connect } from 'react-redux';
//import { postSelector } from '../../selectors';
import { createPost } from '../../actions/posts';
import FileBase from 'react-file-base64';

class Form extends Component {  
  handleSubmit = (e) => {
    e.preventDefault();
    //const formData = new FormData();
    //formData.append('file', file);
    this.props.dispatch(createPost(this.props.post));
  }

  inputOfArray = (input) => {
    if (input) {
      console.log(input.split(','))
      return input.split(',');
    }
  }

  render() {
    //console.log( 'posts ', this.props.posts)
    return (
      <div className="form-container">
        <h2>Create New Memory</h2>
        <form 
          className="form" 
          onSubmit={this.handleSubmit} 
          //encode file input content same as FormData() in JS
          //encType="multipart/form-data"
        >
          <label htmlFor='creator'>Creator:</label>
          <input 
            id="creator"
            name="creator" 
            value={this.props.creator}
            maxLength="12" 
            required
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_CREATOR', payload: e.target.value})
            }
          />
          <label htmlFor='location'>Location:</label>
          <input 
            id="location"
            name="location" 
            value={this.props.location}
            required 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_LOCATION', payload: e.target.value})
            }
          />
          <label htmlFor='message'>Message:</label>
          <textarea 
            id='message' 
            name="message"
            rows="8"
            cols="33"
            value={this.props.message} 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_MESSAGE', payload: e.target.value})
            }
          />
          <label htmlFor="tags">Tags:</label>
          <input 
            id="tags"
            name="tags" 
            value={this.props.tags} 
            onChange={(e) => 
              this.props.dispatch({ type: 'CHANGE_TAGS', payload: this.inputOfArray(e.target.value)})
            }
          />

          <div>
            <label htmlFor="file">Choose file to upload</label>
           <FileBase
              type="file"
              multiple={ false }
              onDone={({base64}) => this.props.dispatch({ type: 'CHANGE_FILE', payload: base64})}
            />
             {/*
            <input
              type="file" 
              name="file"
              id="file"
              value={this.props.file}
              onChange={(e) => 
                this.props.dispatch( {type: 'CHANGE_FILE', payload: e.target.files[0]})
              }
            />*/}
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit">Save</button>
            <button 
              type="button" 
              className="cancel"
              >
              Cancel
            </button>
          </div>
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
      location: state.post.location,
      message: state.post.message,
      creator: state.post.creator,
      file: state.post.file,
      tags: state.post.tags,
    }
  };
};


export default connect(mapStateToProps)(Form);