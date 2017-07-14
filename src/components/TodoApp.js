import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';


class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch />
              <TodoList  />
              <TodoAddForm  />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default TodoApp;
