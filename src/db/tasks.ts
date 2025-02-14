import { getDB } from ".";

export const saveTask = async (task: DBTask): Promise<void> => {
    const db = await getDB();
    await db.runAsync(`
        INSERT INTO tasks (id, title, description, createdAt, completed, priority, dueDate)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `, [
        task.id,
        task.title,
        task.description,
        task.createdAt,
        task.completed ? 1 : 0,
        task.priority,
        task.dueDate,
    ]);
    }

export const getTasks = async (): Promise<DBTask[]> => {
    const db = await getDB();
    const tasks = await db.getAllAsync<DBTask>(`
        SELECT * FROM tasks;
    `);
    return tasks;
};

export const updateTaskDB = async (task: DBTask): Promise<void> => {
    const db = await getDB();
    console.log('updating task:', task);
    await db.runAsync(`
        UPDATE tasks
        SET title = ?, description = ?, completed = ?, priority = ?, dueDate = ?
        WHERE id = ?;
    `, [
        task.title,
        task.description,
        task.completed ? 1 : 0,
        task.priority,
        task.dueDate,
        task.id,
    ]).catch(err => console.log(err));
}

export const deleteTask = async (id: string): Promise<void> => {
    const db = await getDB();
    await db.runAsync(`
        DELETE FROM tasks
        WHERE id = ?;
    `, [id]);
}

export const onTaskComplete = async (id: string): Promise<void> => {
    const db = await getDB();
    await db.runAsync(`
        UPDATE tasks
        SET completed = 1
        WHERE id = ?;
    `, [id]);
}