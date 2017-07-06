import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp component test', () => {
  it('tests if the component exist', () => {
    expect(TodoApp).toExist();
  });

  it('test addTodo function', () => {
    const newText = 'test';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[]});
    todoApp.addTodo(newText);

    expect(todoApp.state.todos[0].text).toBe(newText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  });

  it('should toggle completed value when handleToggle called', () => {
    const testTodo = {id:12, text: 'test', completed: false, createdAt: 0, completedAt: undefined };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [testTodo] });

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    const testTodo = {id:12, text: 'test', completed: true, createdAt: 0, completedAt: 123 };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [testTodo] });

    expect(todoApp.state.todos[0].completed).toBe(true);

    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
