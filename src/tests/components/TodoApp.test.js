import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import { Provider } from 'react-redux';

import TodoApp from 'TodoApp';
import {configure} from '../../store/configureStore';
import TodoList from 'TodoList';

describe('TodoApp component test', () => {
  it('tests if the component exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todoList', () => {
    const store = configure();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toBe(1);
  })
});
