import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from 'App';

// require('style!css!node_modules/foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);
