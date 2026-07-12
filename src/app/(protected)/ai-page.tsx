import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  Pressable,
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { useState, useMemo, useRef, useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  KeyboardToolbar,
  KeyboardStickyView,
} from "react-native-keyboard-controller";

export default function AiPage() {
  const router = useRouter();

  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const [userImageUri, setUserImageUri] = useState<string | null>(
    imageUri || null,
  );
  const [isOpen, setIsOpen] = useState(true);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%"], []);
  const offSet = { closed: -30, opened: -10 };

  const handleSnapPress = useCallback((index: number) => {
    console.log("Opening bottom sheet");
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}
      className="flex-1"
    >
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={{ flex: 1, backgroundColor: "black" }}
      >
        <View className="flex-row items-center mb-6 justify-between">
          <Ionicons
            name="chevron-back"
            size={28}
            color="white"
            onPress={() => router.back()}
          />
          <Text className="text-4xl font-bold text-white">Nextcut AI</Text>
          <Pressable
            onPress={() => router.push("/(protected)/get-credits")}
            style={{ backgroundColor: "#9DC228" }}
            className="items-center justify-center rounded-full px-4 py-3"
          >
            <Text className="text-black text-lg font-bold">Get Credits</Text>
          </Pressable>
        </View>

        <View className="flex-1 px-4 justify-between">
          <View>
            <View className="flex-row items-center justify-center gap-2">
              <Pressable
                className="w-[130px] h-[130px] bg-white rounded-full items-center justify-center"
                onPress={() => console.log("Pressable pressed")}
              >
                {userImageUri && (
                  <Image
                    source={{ uri: userImageUri }}
                    contentFit="cover"
                    style={{ width: 128, height: 128, borderRadius: 65 }}
                  />
                )}
              </Pressable>

              <Pressable
                className="w-[130px] h-[130px] bg-white rounded-full items-center justify-center"
                onPress={() => handleSnapPress(0)}
              >
                <View className="w-[128px] h-[128px] bg-black rounded-full items-center justify-center">
                  <Ionicons name="add" size={50} color="gray" />
                </View>
              </Pressable>
            </View>

            <View className="mt-6">
              <Text className="text-gray-500 text-center">
                Add an inspiration image to help the AI understand the style you
                want for your cut. Press the plus button to select an
                inspiration image.
              </Text>
            </View>
          </View>

          <KeyboardStickyView offset={offSet}>
            <TextInput
              placeholder="Enter your prompt..."
              placeholderTextColor="#8e8e93"
              className="w-full h-12 rounded-xl border border-[#2c2c2e] bg-[#1c1c1e] px-4 mb-2 text-white"
            />
          </KeyboardStickyView>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose
          enableDynamicSizing={false}
          onClose={() => setIsOpen(false)}
          backgroundStyle={{ backgroundColor: "#1c1c1e" }}
          handleIndicatorStyle={{ backgroundColor: "#6b6b6b", width: 40 }}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          <BottomSheetView className="flex-1 px-4 pt-2 gap-4">
            <View className="flex-row items-center justify-between w-full">
              <View style={{ width: 28 }} />
              <Text className="text-lg font-bold text-white">
                Pick your inspiration image
              </Text>
              <Pressable onPress={() => bottomSheetRef.current?.close()}>
                <Ionicons name="chevron-down" size={28} color="white" />
              </Pressable>
            </View>

            <Pressable
              className="bg-[#2c2c2e] rounded-2xl px-4 py-4 flex-row items-center gap-3"
              onPress={() => {
                // pick from app
              }}
            >
              <Ionicons name="images-outline" size={22} color="#9DC228" />
              <Text className="text-white text-base">
                Pick inspiration from app
              </Text>
            </Pressable>

            <Pressable
              className="bg-[#2c2c2e] rounded-2xl px-4 py-4 flex-row items-center gap-3"
              onPress={() => {
                // pick from gallery
              }}
            >
              <Ionicons name="folder-outline" size={22} color="#9DC228" />
              <Text className="text-white text-base">
                Pick inspiration from gallery
              </Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </Pressable>
  );
}
