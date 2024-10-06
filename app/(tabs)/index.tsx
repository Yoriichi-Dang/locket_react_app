import CameraIcon from "components/icons/camera";
import CameraReverseIcon from "components/icons/camera-reverse-icon";
import FlashIcon from "components/icons/flash-icon";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as MediaLibrary from "expo-media-library";
import Avatar from "components/home/avatar";
import UserIcon from "components/icons/user-icon";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions();
  const toggleCameraFacing = useCallback(() => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }, []);
  useEffect(() => {
    (async () => {
      await requestMediaLibraryPermission();
    })();
  }, []);

  const takePicture = useCallback(async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);

        if (photo && mediaLibraryPermission?.granted) {
          const asset = await MediaLibrary.createAssetAsync(photo.uri);
          await MediaLibrary.createAlbumAsync("Expo Camera", asset, false);
          Alert.alert("Success", "Photo saved to gallery!");
        } else if (!mediaLibraryPermission?.granted) {
          Alert.alert(
            "Permission required",
            "Please grant permission to save photos to your gallery."
          );
        } else {
          Alert.alert("Error", "Failed to take picture.");
        }
      } catch (error) {
        console.error("Error taking picture:", error);
        Alert.alert("Error", "Failed to take picture or save to gallery.");
      }
    }
  }, [mediaLibraryPermission?.granted]);
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 justify-start items-center bg-black">
      <View className="relative flex-row justify-center items-center w-full  p-3">
        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)/profile");
          }}
          className="w-16 h-16 absolute left-0 top-0 p-1 items-center justify-center rounded-full border-2 border-primary-300 bg-primary-500"
        >
          <Avatar avatarUrl={require("../../assets/images/avatar.jpg")} />
        </TouchableOpacity>
        <View className="bg-gray-800 flex-row items-center px-4 py-3 rounded-3xl">
          <UserIcon size={24} color="white" />
          <Text className="ml-2 text-base font-bold text-white">
            5 người bạn
          </Text>
        </View>
      </View>
      <CameraView
        ref={cameraRef}
        className="overflow-hidden relative w-full h-1/2 rounded-[60px] border-4 border-primary-400 mt-20"
        facing={facing}
      >
        {/* <View className="absolute bottom-8 w-full px-8">
          <TextInput
            placeholder="Enter text here"
            placeholderTextColor={"gray"}
            className="p-3 bg-primary-600 text-white rounded-full"
          />
        </View> */}
      </CameraView>
      <View className="w-full relative flex-row justify-center items-center  mt-12">
        <TouchableOpacity className="p-4 absolute left-12 ">
          <CameraReverseIcon size={45} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePicture}
          className="p-4 border-2  top-0  border-primary-200 rounded-full"
        >
          <CameraIcon size={45} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="p-4 absolute right-12">
          <FlashIcon size={45} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
