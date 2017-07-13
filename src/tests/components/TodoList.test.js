import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

import { configure } from '../../store/configureStore';

describe('TodoList component test', () => {
  it('tests if the component exist', () => {
    expect(TodoList).toExist();
  });

  it('tests if the TodoList can render each todo item', () => {
    const todos = [
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

    const store = configure({
      todos: todos
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    // const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });


});
