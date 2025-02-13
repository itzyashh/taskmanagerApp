import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase | null = null;

export const dbName = 'tasks.db';

const createTasksTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  createdAt TEXT NOT NULL,
  completed INTEGER NOT NULL,
  priority TEXT NOT NULL,
  dueDate TEXT
);
`;

export const getDB = async (): Promise<SQLite.SQLiteDatabase> => {
  if (db) return db;

  db = await SQLite.openDatabaseAsync(dbName);
  await db.execAsync(createTasksTableQuery);

  return db;
};
