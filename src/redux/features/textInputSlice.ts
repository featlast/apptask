import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TextInputState {
  tasks: string[];
  newTask: string;
}

const initialState: TextInputState = {
  tasks: [],
  newTask:''
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
  },
});

export const { addTask,changeNewTask } = textInputSlice.actions;
export default textInputSlice.reducer;
