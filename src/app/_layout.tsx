import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from "../constants/Colors";

DarkTheme.colors.background = Colors.dark.background;
DefaultTheme.colors.background = Colors.light.background;

export default function RootLayout() {
  const colorScheme = useColorScheme()


  console.log(colorScheme);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name={"(drawer)"} options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
