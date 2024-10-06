import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "contexts/auth-provider";

const SplashPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    router.replace("/(tabs)");
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(auth)/sign-in");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-primary-600">
      <Text className="text-8xl text-white font-DSSemibold p-10">Thuong</Text>
    </View>
  );
};

export default SplashPage;
