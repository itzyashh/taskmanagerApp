import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TaskLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
        <Stack.Screen name="add" options={{

        }} />
        <Stack.Screen name="edit" />
    </Stack>
  )
}

export default TaskLayout