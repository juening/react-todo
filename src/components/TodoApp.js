import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [
        {id: uuid(), text: 'Water the plants', completed: true},
        {id: uuid(), text: 'Clean the yard', completed: false},
        {id: uuid(), text: 'Check email', completed:false }
      ],
      searchText:'',
      showCompleted: false
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  addTodo(newTodoText) {
    const newId = this.state.todos.length + 1;
    this.setState({todos:
      [
        ...this.state.todos,
        {id: uuid(), text: newTodoText, completed:false }
      ]
    });
  }

  handleSearch(text, check) {
    this.setState({searchText: text, showCompleted: check});
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const {todos} = this.state;
    return (
      <div className='app'>
        <div className='row'>
          <div className='column small-centered medium-6 large-4'>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={this.state.todos} onToggle={this.handleToggle} />
            <TodoAddForm addTodo={this.addTodo} />
          </div>
        </div>
      </div>

    );
  }
}

export default TodoApp;
