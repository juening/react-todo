import expect from 'expect';
import df from 'deep-freeze-strict';

import { searchTextReducer, showCompletedReducer, todosReducer } from '../../reducers/reducers';

describe('reducers', () => {
  it('searchTextReducer should return correct state', () => {
    const action = {
      type:'SET_SEARCH_TEXT',
      searchText:'react'
    };

    const res = searchTextReducer(df('hpoe'), df(action));
    expect(res).toEqual(action.searchText);
  });

  it('showCompletedReducer should toggle showCompleted boolean value', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
     const res = showCompletedReducer(df(true), df(action));

     expect(res).toBe(false);
  });

  it('todosReducer should return correct state text', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'dog eat bones'
    };
    const res = todosReducer(df([]), df(action));
    expect(res[0].text).toBe(action.text);
  });

  it('todosReducer should toggle completed status', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id:2
    };
    const testState =
    [
      {id: 2, completed: false, completedAt: undefined, createdAt: 123, text: 'plant eats flies' }
    ];

    const res = todosReducer(df(testState), df(action));
    expect(res[0].completed).toBe(true);
    expect(res[0].completedAt).toExist();
  });

  it('shoud add existing todos', () => {
    const originalTodos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 501
      }
    ];
    const todos = [
      {
        id: 2,
        text: 'Do the dishes',
        completed: false,
        completedAt: undefined,
        createdAt: 502
      }
    ];

    const testAction = {
      type: 'ADD_TODOS',
      todos
    };

    const expectedState = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 501
      },
      {
        id: 2,
        text: 'Do the dishes',
        completed: false,
        completedAt: undefined,
        createdAt: 502
      }
    ];

    const testResult = todosReducer(df(originalTodos), df(testAction));
    expect(testResult).toEqual(expectedState)
  });
})
