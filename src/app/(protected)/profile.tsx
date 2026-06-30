import { View, Text } from "react-native";
import { SignOutButton } from "../../../components/clerk/SignOutButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-black p-4">
      <Text className="text-3xl font-bold text-white">Profile</Text>

      <Text className="text-white mt-6 mb-3 mx-2">Account Details</Text>
      <View className="justify-center items-center bg-[#2a2a2a] p-4 rounded-3xl">
        <View className="flex-row justify-between w-full border-b border-gray-500 pb-3">
          <Text className="text-white">Name</Text>
          <Text className="text-white">Bijaya Gurung</Text>
        </View>
        <View className="flex-row justify-between w-full border-b border-gray-500 pb-3 mt-4">
          <Text className="text-white">Email</Text>
          <Text className="text-white">bijaya.gurung@example.com</Text>
        </View>
        <View className="flex-row justify-between w-full mt-4">
          <Text className="text-white">Phone</Text>
          <Text className="text-white">123-456-7890</Text>
        </View>
      </View>

      <Text className="text-white mt-6 mb-3 mx-2">Credits</Text>
      <View className="justify-center items-center bg-[#2a2a2a] p-4 rounded-3xl">
        <View className="flex-row justify-between w-full border-b border-gray-500 pb-3">
          <Text className="text-white">Current Balance</Text>
          <Text className="text-white">10 credits</Text>
        </View>
        <View className="flex-row items-center gap-2 justify-center w-full mt-4">
            <Ionicons name="flash" size={24} color="#9DC228" />
          <Text className="text-[#9DC228] font-bold">Add more credits</Text>
        </View>
      </View>
    
      <View className="flex-row justify-center gap-2 items-center bg-[#2a2a2a] p-4 rounded-3xl mt-6">
            <Ionicons name="log-out" size={20} color="white" />
             <SignOutButton />
      </View>

    </SafeAreaView>
  );
}
