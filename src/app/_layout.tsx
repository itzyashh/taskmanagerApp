import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

DarkTheme.colors.background = Colors.dark.background;
DefaultTheme.colors.background = Colors.light.background;

export default function RootLayout() {
  const colorScheme = useColorScheme()


  console.log(colorScheme);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name={"index"}  />
        </Stack>
        <StatusBar 
        backgroundColor={colorScheme === "dark" ? Colors.dark.background : Colors.light.background}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} />
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
