import { useAuth } from "@clerk/clerk-expo";
import { StyleSheet } from "react-native";
import { Button } from "./components/Button";

interface Props {
  redirectUrl?: string;
}

export function SignOutButton({ redirectUrl = "/" }: Props) {
  const { signOut } = useAuth();

  async function onSignOutPress() {
    try {
      await signOut({
        // @ts-ignore - redirectUrl is supported but not in the type definitions
        redirectUrl,
      });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  }

  return (
    <Button onPress={onSignOutPress} textStyle={styles.text}>
      Sign out
    </Button>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "semibold",
  },
});

export default SignOutButton;
