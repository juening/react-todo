import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <h2>
          App
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
