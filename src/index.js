import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '@fortawesome/fontawesome-svg-core'

import App from './App';
//set up redux
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/reducer/rootReducer'

const store = createStore(rootReducer)


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
