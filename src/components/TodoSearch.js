import React, { Component } from 'react';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const searchText = this.refs.searchText.value;
    const showCompleted = this.refs.showCompleted.checked;
    this.props.onSearch(searchText, showCompleted);
  }

  render() {
    return (
      <div>
        <div>
          <input type='search' ref='searchText' placeholder='Search Todos' onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
