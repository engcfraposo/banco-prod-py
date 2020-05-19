import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import Login from './components/login'
import Journal from './components/journal'
import University from './components/university'
import Whoweare from './components/about'
import Navbars from './components/navbar'
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


