import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { titleSelector, storySelector } from './selectors';
import { addPost } from './actions/posts';

class App extends Component {
  render() {
    console.log('render ', this.props);
    return (
      <div className='App'>
        <h1 className='header'>Memories</h1>
        <div className='main'>
          <Posts />
          <Form />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
