import { View, Text } from "react-native";
import { SignOutButton } from "../../../components/clerk/SignOutButton";

export default function ProtectedIndex(){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Protected Index Page</Text> 
            <SignOutButton />
        </View>
    )
}