import textInputSlice, { addTask } from "./textInputSlice";

describe('tasksSlice', () => {
  describe('addTask', () => {
    it('should add a new task to the tasks array and clear the newTask field', () => {
      const initialState = {
        tasks: ['Task 1', 'Task 2'],
        newTask: 'New Task',
      };

      const nextState = textInputSlice(initialState, addTask('Task 3'));

      expect(nextState.tasks).toEqual(['Task 1', 'Task 2', 'Task 3']);
      expect(nextState.newTask).toEqual('');
    });
  });
});
