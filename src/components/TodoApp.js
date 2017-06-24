import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';

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

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodoText) {
    console.log('fff')
    const newId = this.state.todos.length + 1;
    this.state.todos.push({id:newId, text:newTodoText});
    console.log(this.state);
  }
  render() {
    const {todos} = this.state;
    return (
      <div className='app'>
        <div className='row'>
          <div className='column small-centered medium-6 large-4'>
            <TodoList todos={this.state.todos} />
            <TodoAddForm addTodo={this.addTodo} />
          </div>
        </div>
      </div>

    );
  }
}

export default TodoApp;
