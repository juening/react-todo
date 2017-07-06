import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
  render() {
    const {id, completed, text, createdAt, completedAt } = this.props;
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a' );
    }
    return (
      <div className='todo-item' onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed} />
        <p>{text} </p>
        <p>{renderDate()}</p>
      </div>
    );
  }
}

export default Todo;
