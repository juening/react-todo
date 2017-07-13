import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {toggleTodo} from '../actions/actions';

export class Todo extends Component {
  render() {
    const {id, completed, text, createdAt, completedAt, dispatch } = this.props;
    let todoClassName = completed ? 'todo todo-completed':'todo';
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
      <div className={todoClassName} onClick={() => {
        dispatch(toggleTodo(id));
      }}>
        <div >
          <input type='checkbox' checked={completed} />
        </div>

        <div>
          <p>{text} </p>
          <p className='todo-subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  }
}


export default connect() (Todo);
