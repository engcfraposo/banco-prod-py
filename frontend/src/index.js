import React from 'react';
import ReactDOM from 'react-dom';
import Statitics from './components/statistics'
import Navbars from './components/navbar'
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbars />
    <Statitics />
  </React.StrictMode>,
  document.getElementById('root')
);


