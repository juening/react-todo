import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from 'App';
import TodoApp from 'TodoApp';
import TodoAPI from './api/TodoAPI';

import { addTodos } from './actions/actions';

// const actions = require('./actions/actions');
const store = require('./store/configureStore').configure();

store.subscribe(() => {
  const state = store.getState();
  console.log('New state ', store.getState());
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));
//
// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

// require('style!css!node_modules/foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!../src/styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={TodoApp} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
