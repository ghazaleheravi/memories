import React, { Component } from "react";
import { connect } from 'react-redux';
import { postSelector } from '../../selectors';
import { createPost } from '../../actions/posts';


class Form extends Component {

  handleTitle = (e) => {
    this.props.dispatch({ type: 'CHANGE_TITLE', payload: e.target.value});
  }
  handleMessage = (e) => {
    this.props.dispatch({ type: 'CHANGE_MESSAGE', payload: e.target.value});
  }
  handleCreator = (e) => {
    this.props.dispatch({ type: 'CHANGE_CREATOR', payload: e.target.value});
  }
  
  render() {
    console.log( 'Form render ', this.props.title)
    return (
      <div className="form-container">
        <form className="form" onSubmit={createPost(this.props.post)}>
          <label forhtml='title'>Title:</label>
          <input 
            id='title' 
            name="title" 
            value={this.props.title} 
            onChange={this.handleTitle}
          />
          <label forhtml='creator'>Creator:</label>
          <input 
            id='creator' 
            name="creator" 
            value={this.props.creator} 
            onChange={this.handleCreator}
          />
          <label forhtml='message'>Message:</label>
          <input 
            id='message' 
            name="message" 
            value={this.props.message} 
            onChange={this.handleMessage}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Global State ', state);
  return {
    posts: postSelector(state),
    post: {
      title: state.post.title,
      message: state.post.message,
      creator: state.post.creator,
    }
  };
};


export default connect(mapStateToProps)(Form);