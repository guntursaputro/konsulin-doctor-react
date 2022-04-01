import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as setup from './setup';

// public url 
const { PUBLIC_URL } = process.env

// setting axios 
setup.setupAxios(axios)

ReactDOM.render(
  <React.StrictMode>
    <App basename={PUBLIC_URL} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
