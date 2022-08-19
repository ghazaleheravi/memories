import React, { Component } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    console.log('render ', this.props);
    return (
      <div className='App'>
        <div className='header'></div>
        <div className='main'>
          <Posts />
          <Form  />
        </div>
      </div> 
    );
  }
}

export default App;
