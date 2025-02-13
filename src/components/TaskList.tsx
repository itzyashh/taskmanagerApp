import { FlatList } from 'react-native'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../types/task'
import { Text, View } from './general/Themed'

type TaskListProps = {
  tasks: Task[]
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {



  return (
    <FlatList
        data={tasks}
        renderItem={({ item }) => (
            <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            </View>
        )}
    />
  )
}

export default TaskList