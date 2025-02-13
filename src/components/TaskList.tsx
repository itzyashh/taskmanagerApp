import { FlatList } from 'react-native'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../types/task'
import { Text, View } from './general/Themed'
import TaskCard from './TaskCard'

type TaskListProps = {
  tasks: Task[]
  search: string
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {



  return (
    <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
    />
  )
}

export default TaskList