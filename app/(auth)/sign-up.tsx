import {
  Text,
  ScrollView,
  StatusBar,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Center from "components/common/center";
import Divider from "components/auth/divider";
import GoogleIcon from "components/icons/google-icon";
import { Link } from "expo-router";
import InputField from "components/auth/input-field";
import EmailIcon from "components/icons/email-icon";
import UserIcon from "components/icons/user-icon";
import LockIcon from "components/icons/lock-icon";

const SignUpPage = () => {
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
              Sign up new account!
            </Text>
            <InputField
              name="email"
              placeholderTextColor="#433D8B"
              placeholder="Email"
              icon={<EmailIcon color="#433D8B" size={20} />}
            />
            <InputField
              name="login_name"
              placeholderTextColor="#433D8B"
              placeholder="Login name"
              icon={<UserIcon color="#433D8B" size={20} />}
            />
            <InputField
              isPassword={true}
              name="password"
              placeholderTextColor="#433D8B"
              placeholder="Password"
              icon={<LockIcon color="#433D8B" size={20} />}
            />
            <InputField
              isPassword={true}
              name="confirm_password"
              placeholderTextColor="#433D8B"
              placeholder="Confirm password"
              icon={<LockIcon color="#433D8B" size={20} />}
            />
            <TouchableOpacity
              className="mt-12 justify-center items-center w-full bg-primary-500 rounded-xl p-4"
              activeOpacity={0.5}
              onPress={() => {
                console.log("hello");
              }}
            >
              <Center>
                <Text className="text-md text-white font-Pmedium">Sign In</Text>
              </Center>
            </TouchableOpacity>

            <View className="flex-row  mt-10 justify-center w-full">
              <Text className="mr-1 font-semibold">
                Already have an account!
              </Text>
              <Link
                className="font-Pbold text-primary-400"
                href={"/(auth)/sign-in"}
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpPage;
