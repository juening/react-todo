import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchText, toggleShowCompleted } from '../actions/actions';

export class TodoSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, showCompleted, searchText} = this.props;
    return (
      <div className='container_header'>
        <div>
          <input type='search' value={searchText} ref='searchText' placeholder='Search Todos' onChange={() => {
            const searchText = this.refs.searchText.value;
            dispatch(setSearchText(searchText))
          }} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={() => {
              dispatch(toggleShowCompleted());
            }} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  showCompleted: state.showCompleted,
  searchText: state.searchText
};
}

export default connect(mapStateToProps)(TodoSearch);
