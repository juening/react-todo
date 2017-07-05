const expect = require('expect');

const TodoAPI = require('../../api/TodoAPI');

describe('test todoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  })
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('test setTodos', () =>{
    it('should set Todos if the data is valid', () => {
      const testTodos = [{id:2, completed: false, text: 'Plant Dahlias'}];
      TodoAPI.setTodos(testTodos);
      const localTodos = JSON.parse(localStorage.getItem('todos'));
      expect(localTodos).toEqual(testTodos);
    });

    it('should not set todos if invalid data entered', () => {
      const testTodos = {a:'b'};
      TodoAPI.setTodos(testTodos);
      const actualLocalTodos = localStorage.getItem('todos');
      expect(actualLocalTodos).toBe(null);
    });
  });

  describe('test getTodos', () => {
    it('should return empty array for bad localStorage entry', () => {
      const actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('shoudl retutn correct todos if data is valid', () => {
      const testTodos = [
        {
          id:11,
          text: 'cook',
          completed: false
        }
      ];

      localStorage.setItem('todos', JSON.stringify(testTodos));
      const savedTodos = TodoAPI.getTodos();
      expect(savedTodos).toEqual(testTodos);
    });
  });


  describe('filter todos', () => {
    const todos = [
      {id:1, completed: true, text: 'task1'},
      {id:2, completed: false, text: 'some task2'},
      {id:3, completed: true, text: 'some task3'}
    ];

    it('should return all items if show completed is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return 1 item if show completed is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      const expectTodos = [
        {id:2, completed: false, text: 'some task2'},
        {id:1, completed: true, text: 'task1'},
        {id:3, completed: true, text: 'some task3'}
      ];
      expect(filteredTodos).toEqual(expectTodos);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should not filter todos by empty searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
})
