import { View, Text } from "react-native";
import { SignOutButton } from "../../../components/clerk/SignOutButton";

export default function Profile(){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile page</Text> 
      <SignOutButton />
        
        </View>
    )
}