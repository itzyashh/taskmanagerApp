
import React from 'react'
import { Text, useThemeColor, View } from '../components/general/Themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import responsive from '../constants/scalling'
import { router, Stack } from 'expo-router'
import FloatingButton from '../components/FloatingButton'

const Page = () => {
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
      <FloatingButton onPress={()=>router.push('/tasks/add')} />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: responsive.margin(20), 
  },
})