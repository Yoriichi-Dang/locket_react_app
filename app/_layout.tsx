import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { AuthProvider } from "contexts/auth-provider";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "DancingScript-Medium": require("../assets/fonts/DancingScript-Medium.ttf"),
    "DancingScript-Regular": require("../assets/fonts/DancingScript-Regular.ttf"),
    "DancingScript-SemiBold": require("../assets/fonts/DancingScript-SemiBold.ttf"),
    "DancingScript-Bold": require("../assets/fonts/DancingScript-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="(auth)/sign-in" options={{}} />
        <Stack.Screen name="(auth)/sign-up" options={{}} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
