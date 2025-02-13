import { configureStore } from '@reduxjs/toolkit';
import Task from './reducers/tasks';

const store = configureStore({
    reducer: {
        tasks: Task,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;