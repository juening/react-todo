import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import {TodoAddForm} from 'TodoAddForm';

describe('todo add form', ()=>{
  it('todoaddform should exist', ()=> {
    expect(TodoAddForm).toExist();
  });

  it('should dispatch addTodo prop with valid data', ()=>{
    const action = {
      type: 'ADD_TODO',
      text: 'Check Email'
    };
    const spy = expect.createSpy();
    const addTodoForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.state.text = 'Check Email';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not call addTodo prop with invalid data', ()=>{
    const spy = expect.createSpy();
    const addTodoForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.state.text = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
