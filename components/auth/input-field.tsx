import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import EyeIcon from "components/icons/eye-icon";
import EyeSlashIcon from "components/icons/eye-slash-icon";
import { loginSchema, registerSchema } from "schemas/auth";
import { z } from "zod";
import { Control, useController } from "react-hook-form";

type InputName =
  | keyof z.infer<typeof loginSchema>
  | keyof z.infer<typeof registerSchema>;
type Properties = {
  name: InputName;
  placeholder: string;
  placeholderTextColor?: string;
  isPassword?: boolean;
  icon: React.ReactNode;
  control: Control<any>;
  error?: string;
};

const InputField = ({
  name,
  placeholder,
  placeholderTextColor,
  isPassword = false,
  icon,
  control,
  error,
}: Properties) => {
  const [showPassword, setShowPassword] = useState(false);
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <View className="mt-10">
      <View className=" w-full flex-row items-center px-4 py-4 bg-primary-200 border border-primary-300 rounded-xl">
        {icon}
        <TextInput
          value={field.value}
          onBlur={field.onBlur}
          onChangeText={field.onChange}
          className="w-full ml-2"
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          secureTextEntry={!showPassword && isPassword}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4"
          >
            {showPassword ? (
              <EyeIcon color="#433D8B" size={20} />
            ) : (
              <EyeSlashIcon color="#433D8B" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-red-500 text-sm font-Pmedium">{error}</Text>
      )}
    </View>
  );
};

export default InputField;
