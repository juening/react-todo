import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';



// require('style!css!node_modules/foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(

    <p>React Boiler plate with Foundation</p>
  ,
  document.getElementById('root')
);
