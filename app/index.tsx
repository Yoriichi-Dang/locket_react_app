import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Href, useRouter } from "expo-router";
import { useAuth } from "contexts/auth-provider";

const SplashPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    let routes: Href<string | object> = { pathname: "/" };
    if (isAuthenticated) {
      routes = "/(tabs)";
    } else {
      routes = "/(auth)/sign-in";
    }
    const timeout = setTimeout(() => {
      router.replace(routes);
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
