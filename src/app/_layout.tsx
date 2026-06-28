import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { AnimatedSplashOverlay } from "@/components/animated-icon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  function RootLayoutWithAuth() {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
      return null;
    }
    return (
      <Stack>
        <Stack.Protected guard={isSignedIn}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isSignedIn}>
          <Stack.Screen name="(public)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    );
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <RootLayoutWithAuth />
      </ClerkProvider>
    </ThemeProvider>
  );
}
