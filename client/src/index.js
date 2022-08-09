import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import reducers from './reducers/posts';
import { Provider } from 'react-redux';
//import { composeWithDevTool } from '@redux-devtools';

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
