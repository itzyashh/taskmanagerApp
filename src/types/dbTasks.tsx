// type Task = {
//     id: string;
//     title: string;
//     description: string;
//     createdAt: string;
//     completed: boolean;
//     priority: 'low' | 'medium' | 'high';
//     dueDate: string;
// }

// type Tasks = {
//     tasks: Task[];
// }

// export type { Task, Tasks }

// DB types Tasks

type DBTask = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

type DBTasks = {
    tasks: DBTask[];
}