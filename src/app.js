import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css';
import './styles/styles.scss';

var appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);