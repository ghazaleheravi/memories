import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/posts';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
//import { composeWithDevTool } from '@redux-devtools';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
