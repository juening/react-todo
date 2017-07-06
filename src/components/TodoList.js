import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos} = this.props;
    const renderList = () => {
      if(todos.length ===0 ) {
        return (
          <p className='container_message'>Nothing to do yet.</p>
        );
      }
      return todos.map((todo) => {
        return <Todo key={todo.id}  {...todo} onToggle={this.props.onToggle} />
      });
    };
    return (
      <div className='todo-list'>
        {renderList()}
      </div>
    );
  }
}


export default TodoList;
