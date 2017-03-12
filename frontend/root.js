import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Dashboard />, root)
});
