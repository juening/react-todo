import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from 'App';
import TodoApp from 'TodoApp';

// require('style!css!node_modules/foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={TodoApp} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
