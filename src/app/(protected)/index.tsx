import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const hairStyles = [
  {
    title: "All",
    icon: "cut-outline",
  },
  {
    title: "Long Hair",
    icon: "person-outline",
  },
  {
    title: "Long Curly",
    icon: "water-outline",
  },
  {
    title: "Buzz Cut",
    icon: "flash-outline",
  },
  {
    title: "Fade Cut",
    icon: "layers-outline",
  },
  {
    title: "Crew Cut",
    icon: "square-outline",
  },
  {
    title: "Textured Crop",
    icon: "sparkles-outline",
  },
  {
    title: "Pompadour",
    icon: "barbell-outline",
  },
] as const;

const trendingHaircuts = [
  {
    title: "Low Fade",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Taper Fade",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Buzz Cut",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Crew Cut",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "French Crop",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Textured Crop",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Pompadour",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Quiff",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Side Part",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
  {
    title: "Mullet",
    image: require("../../../assets/images/app-images/mullet.jpeg"),
  },
];

export default function ProtectedIndex() {
  return (
    <SafeAreaView className="flex-1 bg-black p-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="flex-row items-center justify-between gap-4">
          <Text className="text-3xl font-bold text-white">MyNextCut</Text>

          <Pressable
            onPress={() => console.log("Pressed!")}
            style={{ backgroundColor: "#9DC228" }}
            className="items-center justify-center rounded-full px-6 py-4"
          >
            <Text>Get Credits</Text>
          </Pressable>
        </View>

        <Text className="mt-6 text-lg font-semibold text-white">
          Choose your style
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {hairStyles.map((item) => (
            <View key={item.title} className="mr-6 items-center">
              <View className="mb-3 h-14 w-14 items-center justify-center rounded-full bg-zinc-800">
                <Ionicons name={item.icon} size={26} color="#9DC228" />
              </View>
              <Text className="text-center text-sm text-white">
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Text className="mt-6 text-lg font-semibold text-white">
          Trending now
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {trendingHaircuts.map((item) => (
            <View
              key={item.title}
              className="mr-4 w-36 overflow-hidden rounded-xl bg-zinc-900"
            >
              <Image
                source={item.image}
                className="h-42 w-36"
                resizeMode="cover"
              />
              <Text className="absolute bottom-0 px-3 py-3 text-sm font-semibold text-white">
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Text className="mt-6 text-lg font-semibold text-white">
          More to try on
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {trendingHaircuts.map((item) => (
            <View
              key={item.title}
              className="mr-4 w-36 overflow-hidden rounded-3xl bg-zinc-900"
            >
              <Image
                source={item.image}
                className="h-42 w-36"
                resizeMode="cover"
              />
              <Text className="absolute bottom-0 px-3 py-3 text-sm font-semibold text-white">
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
