import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
import TodoAPI from '../api/TodoAPI';

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderList = () => {
      if(todos.length ===0 ) {
        return (
          <p className='container_message'>Nothing to do yet.</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return <Todo key={todo.id}  {...todo}/>
      });
    };
    return (
      <div className='todo-list'>
        {renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}


export default connect(mapStateToProps)(TodoList);
