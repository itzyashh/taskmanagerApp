
import React, { useEffect } from 'react'
import { Text, useThemeColor, View } from '../components/general/Themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import responsive from '../constants/scalling'
import { router, Stack, useFocusEffect } from 'expo-router'
import FloatingButton from '../components/FloatingButton'
import TasksList from '../components/TaskList'
import { useSelector } from 'react-redux'
import { selectTasks } from '../store'
import { useHeaderHeight } from '@react-navigation/elements'

const Page = () => {

  const tasks = useSelector(selectTasks)
  console.log('Tasks here:', tasks)
  const headerHeight = useHeaderHeight()
  return (
    <View style={styles.container}>
      <Stack.Screen 
      options={{ 
        headerShown: true,
        headerTitle: "Tasks",
        headerSearchBarOptions: {
          placeholder: "Search for tasks",
          obscureBackground: true,
          headerIconColor: useThemeColor({ }, "textPrimary"),
        }
      }}
      name="index" />
      <View style={{marginTop: headerHeight}}>
      <TasksList tasks={tasks} />
      </View>
      <FloatingButton onPress={()=>router.push('/tasks/add')} />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: responsive.margin(20), 
  },
})