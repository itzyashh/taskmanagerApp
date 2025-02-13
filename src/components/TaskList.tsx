import { FlatList } from 'react-native'
import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../types/task'
import { Text, View } from './general/Themed'
import TaskCard from './TaskCard'

type TaskListProps = {
  tasks: Task[]
  search: string
}

const TaskList: FC<TaskListProps> = ({ tasks, search }) => {
  // Filter tasks based on search text
  const filteredTasks = useMemo(() => {
    if (!search.trim()) {
      return tasks
    }

    const searchLower = search.toLowerCase()
    return tasks.filter(task => 
      task.title.toLowerCase().includes(searchLower) || 
      (task.description && task.description.toLowerCase().includes(searchLower))
    )
  }, [tasks, search])

  // Render empty state when no tasks match search
  const renderEmptyList = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 16 }}>
        {tasks.length === 0 
          ? "No tasks yet" 
          : "No tasks match your search"}
      </Text>
    </View>
  )

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={filteredTasks}
      renderItem={({ item }) => <TaskCard task={item} />}
      keyExtractor={item => item.id}
      ListEmptyComponent={renderEmptyList}
    />
  )
}

export default TaskList