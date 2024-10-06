import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UserIcon from "components/icons/user-icon";
import ArrowRightIcon from "components/icons/arrow-right-icon";

type Props = {
  content: string;
  onPress: () => void;
  icon: React.ReactNode;
};

const ProfileItem = ({ content, onPress, icon }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full flex-row justify-between items-center mt-4 px-4 py-2 bg-primary-400 rounded-3xl"
    >
      <View className="flex-1 flex-row items-center">
        <View className="p-2 bg-primary-500 rounded-full">{icon}</View>
        <Text className="ml-4 text-white font-semibold text-base">
          {content}
        </Text>
      </View>
      <ArrowRightIcon size={24} color="#CDC1FF" />
    </TouchableOpacity>
  );
};

export default ProfileItem;
