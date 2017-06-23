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

});
