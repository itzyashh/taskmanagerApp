import * as z from 'zod';


const taskSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(50, 'Title must be less than 50 characters'),
  description: z.string()
    .min(1, 'Description is required')
    .max(500, 'Description must be less than 500 characters'),
  dueDate: z.string()
    .min(1, 'Due date is required'),
});

export {taskSchema}