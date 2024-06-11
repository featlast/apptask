import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TextInputState {
  tasks: string[];
  newTask: string;
  editMode: boolean;
  id: string;
}
export interface UpdateTaskPayload {
  index: number;
  newChar: string;
}

const initialState: TextInputState = {
  tasks: [],
  newTask: '',
  editMode: false,
  id: '',
};

const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
      state.newTask = '';
    },
    changeNewTask: (state, action: PayloadAction<string>) => {
      state.newTask = action.payload;
    },
    captureIdTask: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      console.log('ID=>PAYLOD', action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
    updateTask: (
      state,
      action: PayloadAction<{id: number; newValue: string}>,
    ) => {
      const {id, newValue} = action.payload;
      const taskIndex = state.tasks.indexOf(state.tasks[id]);
      if (taskIndex !== -1) {
        const updatedTasks = [...state.tasks];
        updatedTasks[taskIndex] = newValue;
        state.tasks = updatedTasks;
      }
      state.newTask = '';
    },
    openEdit: state => {
      state.editMode = true;
    },
    closeEdit: state => {
      state.editMode = false;
    },
  },
});

export const {
  addTask,
  changeNewTask,
  deleteTask,
  updateTask,
  openEdit,
  closeEdit,
  captureIdTask,
} = textInputSlice.actions;
export default textInputSlice.reducer;
