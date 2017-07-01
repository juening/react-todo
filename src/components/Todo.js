import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const {id, completed, text} = this.props;
    return (
      <div className='todo-item' onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed} />
        {text}
      </div>
    );
  }
}

export default Todo;
