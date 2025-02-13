import { Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Text, View, useThemeColor } from '@/src/components/general/Themed'
import responsive from '@/src/constants/scalling'
import { FormProvider, useForm } from 'react-hook-form'
import { Task } from '@/src/types/task'
import CustomDateTimePicker from '@/src/components/general/CustomDateTimePicker'
import CustomInput from '@/src/components/general/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '@/src/store/reducers/tasks'

const dummyData = {
  title: 'Task 1',
  description: 'This is a task',
  dueDate: new Date().toISOString(),
}

const Page = () => {
  // Get theme colors
  const surfaceBackground = useThemeColor({}, 'surfaceBackground')
  const textColor = useThemeColor({}, 'textPrimary')
  const primaryColor = useThemeColor({}, 'primary')
  const dispatch = useDispatch()

  const form = useForm<Task>({
    defaultValues: dummyData,
  })

  const handleSubmit = form.handleSubmit((data) => {
    const task: Task = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
      createdAt: new Date().toISOString(),
      priority: 'low',
    }
    
    dispatch(addTask(task))
    router.back()
  })

  return (
    <View style={[styles.container, { backgroundColor: surfaceBackground }]}>
      <FormProvider {...form}>
        <Stack.Screen 
          name="add" 
          options={{ 
            headerTitle: "Add Task",
            headerShadowVisible: false,
            headerStyle: { backgroundColor: surfaceBackground },
            headerTintColor: textColor,
          }} 
        />
        
        <View style={[styles.form, { backgroundColor: surfaceBackground }]}>
          <CustomInput
            name="title"
            label="Task Title"
            placeholder="Enter task title"
          />

          <CustomInput
            name="description"
            label="Description"
            placeholder="Enter task description"
            multiline
          />

          <CustomDateTimePicker
            label="Due Date"
            mode="datetime"
            name="dueDate"
          />

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: primaryColor }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Task</Text>
          </TouchableOpacity>
        </View>
      </FormProvider>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: responsive.padding(16),
  },
  inputContainer: {
    marginBottom: responsive.margin(16),
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: responsive.fontSize(14),
    fontWeight: '600',
    marginBottom: responsive.margin(8),
  },
  input: {
    borderRadius: responsive.borderRadius(8),
    padding: responsive.padding(12),
    fontSize: responsive.fontSize(16),
    borderWidth: 1,
  },
  textArea: {
    height: responsive.height(100),
    textAlignVertical: 'top',
  },
  button: {
    padding: responsive.padding(16),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
    marginTop: responsive.margin(16),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsive.fontSize(16),
    fontWeight: '600',
  },
})