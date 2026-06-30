import { Image, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyHaircuts() {
  return (
    <View className="flex-1 bg-black justify-center items-center p-4">
      <Ionicons name="images" size={34} color="#9DC228" />
      <View className="flex-row items-center justify-center mt-2">
        <Text className="text-lg font-bold text-white">
          No haircuts found !
        </Text>
      </View>
      <Text className="text-gray-400 text-center mt-2">
        Tap the camera in the bottom-right corner to start creating your first
        haircut.
      </Text>
      <View className="absolute bottom-20 right-10">
        <Image
          source={require("../../../assets/images/app-images/my-haircuts-palceholder.png")}
          className="h-80 w-80"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
