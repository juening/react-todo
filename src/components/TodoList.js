import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos} = this.props;
    const renderList = () => {
      return todos.map((todo) => {
        return <Todo  {...todo} />
      });
    };
    return (
      <div classname='todo-list'>
        {renderList()}
      </div>
    );
  }
}


export default TodoList;
