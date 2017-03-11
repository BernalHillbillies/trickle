import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game_comp';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Game />, root)
});
