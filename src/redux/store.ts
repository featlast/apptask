import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { taskApi } from '../services/taskApi'
import modalReducer from './features/modalSlice';
import textInputSlice from './features/textInputSlice';

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    modal: modalReducer,
    textInput: textInputSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
