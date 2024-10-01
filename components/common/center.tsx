import { View, Text } from "react-native";
import React from "react";
type Properties = {
  children: React.ReactNode;
  direction?: "row" | "column";
};
const Center = ({ children, direction = "row" }: Properties) => {
  return (
    <View
      className={`${
        direction === "row" ? "w-full" : "h-full"
      } items-center justify-center}`}
    >
      {children}
    </View>
  );
};

export default Center;
