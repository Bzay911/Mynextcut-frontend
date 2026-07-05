import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function PublicLayout() {
  return (
    <>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="#f5f5f5"
        translucent={false}
      /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
