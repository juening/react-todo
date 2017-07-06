import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import TodoAPI from '../api/TodoAPI';
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: TodoAPI.getTodos(),
      searchText:'',
      showCompleted: false
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  addTodo(newTodoText) {
    const newId = this.state.todos.length + 1;
    this.setState({todos:
      [
        ...this.state.todos,
        { id: uuid(), text: newTodoText, completed:false, createdAt: moment().unix(), completedAt: undefined }
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className='app'>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <TodoAddForm addTodo={this.addTodo} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default TodoApp;
