import $ from 'jquery';

module.exports = {
  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos: []
    // if($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },

  setTodos(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = [];
    filteredTodos = todos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase();
      return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
    });

    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
