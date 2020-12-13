import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css'

ReactDOM.render(
  <>
    <BrowserRouter basename='https://gambhir-harshil.github.io/Portfolio/'>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

