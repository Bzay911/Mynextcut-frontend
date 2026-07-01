import { View, Text, Button, Pressable } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [uri, setUri] = useState<string | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Camera access is required to use this feature.</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    console.log("Toggling camera facing");
    setFacing((prevFacing) => (prevFacing === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    console.log("Taking picture");
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setUri(photo.uri);
    }
  };

  const renderPicture = (uri: string) => {
    return (
      <View>
        <Image
          source={{ uri }}
          contentFit="contain"
          style={{ width: "100%", aspectRatio: 2 / 3 }}
        />
        <Button title="Retake" onPress={() => setUri(null)} />
      </View>
    );
  };

  const renderCamera = () => {
    return (
      <View className="flex-1">
         <Pressable onPress={() => setUri(null)} className="absolute top-4 right-4 z-10 bg-gray-400 p-2 rounded-full">
        <Ionicons name="close" size={28} color="white" />
        </Pressable>
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          ref={cameraRef}
          mirror={true}
        />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#000]">
       
      {uri ? renderPicture(uri) : renderCamera()}
      <View className="bg-black w-full h-32 items-center justify-between flex-row p-2">
        <Pressable
          onPress={toggleCameraFacing}
          className="bg-gray-300 p-3 rounded-full m-2"
        >
          <Ionicons name="image" size={28} color="black" />
        </Pressable>

        <Pressable onPress={takePicture} className="">
          {({ pressed }) => (
            <View
              className={`w-20 h-20 rounded-full bg-gray-300 items-center justify-center ${pressed ? "opacity-50" : "opacity-100"}`}
            >
              <View className="w-16 h-16 rounded-full bg-white" />
            </View>
          )}
        </Pressable>
        <Pressable
          onPress={toggleCameraFacing}
          className="bg-gray-300 p-3 rounded-full m-2"
        >
          <Ionicons name="camera-reverse" size={28} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
