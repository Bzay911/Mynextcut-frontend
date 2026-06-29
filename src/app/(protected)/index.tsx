import { View, Text, ScrollView, Pressable } from "react-native";
import { SignOutButton } from "../../../components/clerk/SignOutButton";

export default function ProtectedIndex(){
    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Pressable onPress={() => console.log("Pressed!")}>
            <Text>Get Credits</Text>
         </Pressable>

            <SignOutButton />
        </ScrollView>
    )

}