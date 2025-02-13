import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed selectors
export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTaskById = (state: RootState, taskId: string) => 
  state.tasks.tasks.find(task => task.id === taskId);

export default store;