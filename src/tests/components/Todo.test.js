import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Todo from 'Todo';

describe('Todo component test', () => {
  it('tests if the component exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () =>{
    const testTodo = {
      id:9,
      completed: true,
      text: 'test2'
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...testTodo} onToggle={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(9);
  });
});
