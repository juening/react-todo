import expect from 'expect';
import {setSearchText, addTodo, toggleShowCompleted, toggleTodo, addTodos} from '../../actions/actions.js';

describe('actions', () => {
  it('setSearchText should generate correct search text', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'test'
    };
    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('addTodo should generate correct correct action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'test addTodo'
    };

    const res = addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    const testTodos = [
      { id:111,
        text: 'water luffa',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
      }
    ];
    const testAction = {
      type:'ADD_TODOS',
      todos: testTodos
    };
    const res = addTodos(testTodos);
    expect(res).toEqual(testAction);
  })

  it('toggleShowCompleted should generate correct action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const res = toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('toggleTodo should toggle should generate correct action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    const res = toggleTodo(action.id);
    expect(res).toEqual(action);
  });

});
