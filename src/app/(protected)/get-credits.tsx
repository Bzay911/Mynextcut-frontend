import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import {useRouter} from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function GetCredits() {
    const router = useRouter();
    return(
        <SafeAreaView className="flex-1 bg-[#1c1c1e]">
            <View className="flex-row justify-between items-cente p-6">
          <Text className="text-4xl font-bold text-white">Get Credits</Text>
          <Ionicons name="close" size={30} color="white" onPress={() => router.back()} />      
            </View>
        </SafeAreaView>
    )
}