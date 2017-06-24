import React, { Component } from 'react';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state={ text: 'Add a new task'};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(e) {
    this.setState({text:e.target.value});
  }
  onFormSubmit(e) {
    e.preventDefault();
    const inputText = this.state.text;
    if (inputText) {
      this.props.addTodo(inputText);
      this.setState({ text: ''});
    } else {
      this.refs.inputText.focus();
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className='todo-form'>
          <input type='text' onChange={this.onInputChange}
            name='text' ref='inputText' value={this.state.text} onFocus={()=>{this.setState({text: '' })}} />
          <button type='submit' className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoAddForm;
