import React, { Component } from 'react';
import TodoList from 'TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [
        {id: 1, text: 'Water the plants'},
        {id: 2, text: 'Clean the yard'},
        {id: 3, text: 'Check email'}
      ]
    };
  }
  render() {
    const {todos} = this.state;
    return (
      <TodoList todos={todos} />
    );
  }
}

export default TodoApp;
