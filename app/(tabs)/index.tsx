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

export default function Home() {
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
      <CameraView
        ref={cameraRef}
        className="overflow-hidden relative w-full h-1/2 rounded-[60px] border-4 border-primary-400 mt-28"
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
      <View className="w-3/4 justify-center items-center  mt-12">
        {/* <TouchableOpacity className="p-4 ">
              <CameraReverseIcon size={45} color="white" />
            </TouchableOpacity> */}
        <TouchableOpacity
          onPress={takePicture}
          className="p-4 border-2 absolute top-0  border-primary-200 rounded-full"
        >
          <CameraIcon size={45} color="white" />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <FlashIcon size={45} color="white" />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
