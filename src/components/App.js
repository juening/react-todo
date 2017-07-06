import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <h2 className='page-title'>
          Todo App with React
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
