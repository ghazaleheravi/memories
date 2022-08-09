import React, { Component } from "react";
import { connect } from 'react-redux';
import { titleSelector, storySelector } from '../../selectors';
import { addPost } from '../../actions/posts';


class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('working!');
  }

  handleChangedTitle = (e) => {
    this.props.dispatch({ type: 'ADD_POST', payload: e.target.value});
  }
  
  handleChangedStory = (e) => {
    this.props.dispatch({ type: 'ADD_POST', payload: e.target.value});
  }
  
  render() {
    console.log( 'Form render ', this.props.state)
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <label forhtml='title'>Title:</label>
          <input 
            id='title' 
            name="title" 
            value={this.props.title} 
            onChange={this.handleChangedTitle}
          />

          <label forhtml='story'>Tell your story:</label>
          <textarea 
            id='story' 
            name="story" 
            value={this.props.story} 
            onChange={this.handleChangedStory}
          >
          </textarea>

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Global State ', state);
  return {
    title: titleSelector(state),
    story: storySelector(state),
  };
};

const mapDispatchToProps = {
  addPost
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);