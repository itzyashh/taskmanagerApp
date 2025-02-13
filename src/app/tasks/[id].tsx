import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Text, View, useThemeColor } from '@/src/components/general/Themed'
import { FormProvider, useForm } from 'react-hook-form'
import { Task } from '@/src/types/task'
import CustomInput from '@/src/components/general/CustomInput'
import CustomDateTimePicker from '@/src/components/general/CustomDateTimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask, updateTask } from '@/src/store/reducers/tasks'
import responsive from '@/src/constants/scalling'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'

const Page = () => {
  const { id } = useLocalSearchParams()
  const dispatch = useDispatch()
  const [editMode, setEditMode] = React.useState(false)
  
  // Get theme colors
  const surfaceBackground = useThemeColor({}, 'surfaceBackground')
  const textColor = useThemeColor({}, 'textPrimary')
  const secondaryTextColor = useThemeColor({}, 'textSecondary')
  const primaryColor = useThemeColor({}, 'primary')
  const errorColor = useThemeColor({}, 'error')

  // Get task from store
  const task = useSelector((state: any) => 
    state.tasks.tasks.find((t: Task) => t.id === id)
  )

  const form = useForm<Task>({
    defaultValues: task
  })

  const handleSubmit = form.handleSubmit((data) => {
    dispatch(updateTask({ ...data, id: task.id }))
    setEditMode(false)
  })

  const handleDelete = () => {
    dispatch(removeTask(task.id))
    router.back()
  }

  const renderViewMode = () => (
    <View style={styles.viewContainer}>
      <View style={styles.section}>
        <Text style={[styles.label, { color: secondaryTextColor }]}>Title</Text>
        <Text style={[styles.value, { color: textColor }]}>{task.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: secondaryTextColor }]}>Description</Text>
        <Text style={[styles.value, { color: textColor }]}>{task.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: secondaryTextColor }]}>Due Date</Text>
        <Text style={[styles.value, { color: textColor }]}>
          {dayjs(task.dueDate).format('MMM D, YYYY h:mm A')}
        </Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: primaryColor, flex: 0 }]}
        onPress={() => setEditMode(true)}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>Edit Task</Text>
      </TouchableOpacity>
    </View>
  )

  const renderEditMode = () => (
    <FormProvider {...form}>
      <View style={styles.form}>
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

        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton, { borderColor: primaryColor }]}
            onPress={() => setEditMode(false)}
          >
            <Text style={[styles.buttonText, { color: primaryColor }]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: primaryColor }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FormProvider>
  )

  return (
    <View style={[styles.container, { backgroundColor: surfaceBackground }]}>
      <Stack.Screen 
        options={{ 
          headerTitle: editMode ? "Edit Task" : "Task Details",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: surfaceBackground },
          headerTintColor: textColor,
          headerRight: () => (
            <TouchableOpacity onPress={handleDelete}>
              <Ionicons name="trash-outline" size={24} color={errorColor} />
            </TouchableOpacity>
          ),
        }} 
      />
      
      {editMode ? renderEditMode() : renderViewMode()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    padding: responsive.padding(16),
  },
  section: {
    marginBottom: responsive.margin(24),
  },
  label: {
    fontSize: responsive.fontSize(14),
    marginBottom: responsive.margin(8),
  },
  value: {
    fontSize: responsive.fontSize(16),
    fontWeight: '500',
  },
  form: {
    padding: responsive.padding(16),
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: responsive.width(12),
    marginTop: responsive.margin(16),
  },
  button: {
    flex: 1,
    padding: responsive.padding(16),
    borderRadius: responsive.borderRadius(8),
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: responsive.fontSize(16),
    fontWeight: '600',
  },
})

export default Page