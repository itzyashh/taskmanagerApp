import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import * as SQLite from "expo-sqlite";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { dbName, getDB } from "../db";
import { useEffect } from "react";
import { getTasks } from "../db/tasks";
import { setTasks } from "../store/reducers/tasks";

DarkTheme.colors.background = Colors.dark.background;
DefaultTheme.colors.background = Colors.light.background;

const db = SQLite.openDatabaseSync(dbName);
// SQLite.deleteDatabaseSync(dbName);

// getDB()


export default function RootLayout() {
  const colorScheme = useColorScheme()


  useDrizzleStudio(db);

  const loadTasks = async () => {
    const tasks = await getTasks();
    store.dispatch(setTasks(tasks));
  }

  useEffect(() => {
    loadTasks();
  }, []);


  console.log(colorScheme);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Provider store={store}>
        <Stack>
          <Stack.Screen name={"index"}  />
        </Stack>
        </Provider>
        <StatusBar 
        backgroundColor={colorScheme === "dark" ? Colors.dark.background : Colors.light.background}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} />
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
