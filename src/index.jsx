import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import '../assets/stylesheets/application.scss';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Router from './components/router'



const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
      <Router />
    , root);
}
