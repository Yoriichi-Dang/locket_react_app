import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
type Properties = {
  avatarUrl: any;
};
const Avatar = ({ avatarUrl }: Properties) => {
  return (
    <Image
      className="h-full w-full rounded-full"
      resizeMode="contain"
      source={avatarUrl}
    />
  );
};

export default Avatar;
