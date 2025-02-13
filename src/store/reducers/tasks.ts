import { Task } from '@/src/types/task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

const Tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            console.log('adding task2:', action.payload);
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        toggleTaskComplete: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, removeTask, updateTask, toggleTaskComplete } = Tasks.actions;
export default Tasks.reducer;