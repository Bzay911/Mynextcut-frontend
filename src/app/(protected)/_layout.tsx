import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function ProtectedLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="get-credits"
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="image-displayer"
            options={{ presentation: "modal" }}
          />
        </Stack>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}