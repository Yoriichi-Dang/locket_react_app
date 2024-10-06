import {
  Text,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Center from "components/common/center";
import Divider from "components/auth/divider";
import GoogleIcon from "components/icons/google-icon";
import { Link } from "expo-router";
import InputField from "components/auth/input-field";
import EmailIcon from "components/icons/email-icon";
import LockIcon from "components/icons/lock-icon";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "schemas/auth";
import z from "zod";
import HttpService from "services/http-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "contexts/auth-provider";
const SignInPage = () => {
  const { signIn } = useAuth();

  const httpService = new HttpService();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
    try {
      const response = await httpService.post("/login", data);
      if (response.status === 200) {
        const responseData = response.data as {
          access_token: string;
          refresh_token: string;
        };
        await AsyncStorage.setItem("access_token", responseData.access_token);
        await AsyncStorage.setItem("refresh_token", responseData.refresh_token);
        signIn(responseData.access_token);
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#E5D9F2",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
          backgroundColor: "#E5D9F2",
        }}
      >
        <StatusBar animated={true} barStyle={"dark-content"} />
        <View className="items-center justify-start w-full h-[88vh]">
          <View className="flex-row items-center">
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../../assets/images/logo/logo_1.png")}
            />
            <Text className="text-4xl font-DSSemibold ml-2">Thuong</Text>
          </View>
          <View className="mt-14 justify-start w-full px-10">
            <Text className="text-lg font-Pmedium ml-1">
              Sign in to your account!
            </Text>
            <InputField
              error={errors.email?.message}
              control={control}
              name="email"
              placeholderTextColor="#433D8B"
              placeholder="Email"
              icon={<EmailIcon color="#433D8B" size={20} />}
            />
            <InputField
              error={errors.password?.message}
              control={control}
              isPassword={true}
              name="password"
              placeholderTextColor="#433D8B"
              placeholder="Password"
              icon={<LockIcon color="#433D8B" size={20} />}
            />
            <TouchableOpacity
              className="mt-12 justify-center items-center w-full bg-primary-500 rounded-xl p-4"
              activeOpacity={0.5}
              onPress={handleSubmit(onSubmit)}
            >
              <Center>
                <Text className="text-md text-white font-Pmedium">Sign In</Text>
              </Center>
            </TouchableOpacity>
            {/* <View className="flex-row w-full mt-10 items-center">
              <Divider />
              <Text className="p-3 text-gray-400">Or</Text>
              <Divider />
            </View>
            <TouchableOpacity className="mt-10 flex-row items-center justify-center border border-primary-300 bg-primary-200 p-3 rounded-xl">
              <GoogleIcon size={30} />
              <Text className="ml-3">Sign In With Google</Text>
            </TouchableOpacity> */}
            <View className="flex-row mt-10 justify-center w-full">
              <Text className="mr-1 font-semibold">Don't have an account?</Text>
              <Link
                className="font-Pbold text-primary-400"
                href={"/(auth)/sign-up"}
              >
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInPage;
