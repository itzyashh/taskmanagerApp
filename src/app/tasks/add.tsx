import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Text, View, useThemeColor } from '@/src/components/general/Themed'
import responsive from '@/src/constants/scalling'
import { Ionicons } from '@expo/vector-icons'

const Page = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  // Get theme colors
  const backgroundColor = useThemeColor({}, 'background')
  const surfaceBackground = useThemeColor({}, 'surfaceBackground')
  const textColor = useThemeColor({}, 'textPrimary')
  const placeholderColor = useThemeColor({}, 'textSecondary')
  const primaryColor = useThemeColor({}, 'primary')
  const borderColor = useThemeColor({}, 'border')

  const handleSubmit = () => {
    // Handle task creation logic here
    console.log({ title, description, dueDate })
  }

  return (
    <View style={[styles.container, { backgroundColor: surfaceBackground }]}>
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
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: textColor }]}>Task Title</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              color: textColor
            }]}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter task title"
            placeholderTextColor={placeholderColor}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: textColor }]}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea, { 
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              color: textColor
            }]}
            value={description}
            onChangeText={setDescription}
            placeholder="Enter task description"
            placeholderTextColor={placeholderColor}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: textColor }]}>Due Date</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              color: textColor
            }]}
            value={dueDate}
            onChangeText={setDueDate}
            placeholder="Select due date"
            placeholderTextColor={placeholderColor}
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: primaryColor }]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Create Task</Text>
        </TouchableOpacity>
      </View>
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