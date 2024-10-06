import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ animation: "slide_from_right" }} />
      <Stack.Screen
        name="profile/index"
        options={{ animation: "slide_from_left" }}
      />
    </Stack>
  );
};

export default TabLayout;
