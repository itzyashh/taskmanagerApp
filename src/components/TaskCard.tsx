import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, useThemeColor } from './general/Themed'
import { Task } from '../types/task'
import responsive from '../constants/scalling'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import { router } from 'expo-router'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { useDispatch } from 'react-redux'
import { removeTask, toggleTaskComplete } from '../store/reducers/tasks'
// Add at the top of your file

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const backgroundColor = useThemeColor({}, 'cardBackground')
  const textColor = useThemeColor({}, 'textPrimary')
  const secondaryTextColor = useThemeColor({}, 'textSecondary')
  const primaryColor = useThemeColor({}, 'primary')

  const dispatch = useDispatch()


  const onTap = () => {
    console.log('Task tapped:', task.id)
    router.push(`/tasks/${task.id}`)
  }

  const onToggleComplete = () => {
    dispatch(toggleTaskComplete(task.id))
  }

  const onDelete = () => {
    dispatch(removeTask(task.id))
    }

const formattedDate = () => {
  console.log('task.dueDate:', task.dueDate);
  
  // First parse the date string using the correct format
  const parsedDate = dayjs(task.dueDate, 'DD/MM/YYYY HH:mm');
  
  // Check if the date is valid
  if (!parsedDate.isValid()) {
    console.error('Invalid date format:', task.dueDate);
    return 'Invalid date';
  }
  
  // Format the date in a readable format
  return parsedDate.format('MMM D, YYYY h:mm A');
}

  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity style={styles.deleteAction} onPress={onDelete}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      )}>
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]} 
      onPress={onTap}
      activeOpacity={0.7}
    >
      <TouchableOpacity 
        style={styles.checkbox} 
        onPress={onToggleComplete}
      >
        <Ionicons 
          name={task.completed ? "checkmark-circle" : "ellipse-outline"} 
          size={24} 
          color={task.completed ? primaryColor : secondaryTextColor}
        />
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text 
          style={[
            styles.title, 
            { 
              color: textColor,
              textDecorationLine: task.completed ? 'line-through' : 'none'
            }
          ]}
        >
          {task.title}
        </Text>
        
        <Text style={[styles.date, { color: secondaryTextColor }]}>
          Due: {formattedDate()}
        </Text>
      </View>
    </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: responsive.padding(16),
    borderRadius: responsive.borderRadius(12),
    marginHorizontal: responsive.margin(16),
    marginVertical: responsive.margin(8),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  checkbox: {
    marginRight: responsive.margin(12),
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: responsive.fontSize(16),
    fontWeight: '600',
    marginBottom: responsive.margin(4),
  },
  date: {
    fontSize: responsive.fontSize(12),
  },
    deleteAction: {

        justifyContent: 'center',
        alignItems: 'center',
        width: responsive.width(80),
    },
})

export default TaskCard