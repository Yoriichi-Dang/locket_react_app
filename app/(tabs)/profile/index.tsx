import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "components/home/avatar";
import AttachIcon from "components/icons/attach-icon";
import LinkIcon from "components/icons/link-icon";
import SearchIcon from "components/icons/search-icon";
import UserIcon from "components/icons/user-icon";
import ArrowLeftIcon from "components/icons/arrow-left-icon";
import ArrowRightIcon from "components/icons/arrow-right-icon";
import ProfileItem from "components/home/profile/profile-item";
import UserSolidIcon from "components/icons/user-solid-icon";
import SettingSolidIcon from "components/icons/setting-solid-icon";
import PasswordLockIcon from "components/icons/password-lock-icon";
import DangerIcon from "components/icons/danger-icon";
import ArrowLeftEndLogoutIcon from "components/icons/arrow-left-end-logout-icon";
import HearIcon from "components/icons/hear-icon";
import FaceBookIcon from "components/icons/facebook-icon";
import LockCloseIcon from "components/icons/lock-close-icon";
import InstagramIcon from "components/icons/instagram-icon";
import CollectionIcon from "components/icons/collection-icon";
import ImageIcon from "components/icons/image-icon";
import { useAuth } from "contexts/auth-provider";
import axios from "axios";
import HttpService from "services/http-service";

const ProfilePage = () => {
  const { session } = useAuth();
  const httpService = new HttpService();
  useEffect(() => {
    const fetchProfileUser = async () => {
      const response = await httpService.get("/profile", {}, true);
      console.log(response.data);
    };
    fetchProfileUser();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-primary-600">
      <ScrollView>
        <View className="w-full space-y-6 justify-center items-center mt-10 ">
          <TouchableOpacity
            onPress={() => {
              console.log("Avatar clicked");
            }}
            className="w-32 h-32 p-2 border-2 border-primary-200 rounded-full"
          >
            <Avatar avatarUrl={require("../../../assets/images/avatar.jpg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("Username copied: yorichi2003");
              // Add your copy to clipboard logic here
            }}
            className="w-auto border flex-row items-center border-primary-100 bg-primary-400 px-3 py-2 rounded-2xl"
          >
            <Text className="text-lg mr-1 text-primary-200 font-Pmedium">
              {session?.loginName}
            </Text>
            <LinkIcon size={24} color="#D5D4D4FF" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 px-5">
          <View>
            <View className="flex-row items-center mt-10">
              <CollectionIcon size={30} color="#CDC1FF" />
              <Text className="text-lg text-primary-200 font-Pmedium ml-2">
                Bài đăng
              </Text>
            </View>
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="5 bài"
              icon={<ImageIcon size={24} color="#CDC1FF" />}
            />
          </View>
          <View>
            <View className="flex-row items-center mt-10">
              <SearchIcon size={30} color="#CDC1FF" />
              <Text className="text-lg text-primary-200 font-Pmedium ml-2">
                Bạn bè
              </Text>
            </View>
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="5 nguoi ban"
              icon={<UserIcon size={24} color="#CDC1FF" />}
            />
          </View>
          <View>
            <View className="flex-row items-center mt-8">
              <UserSolidIcon size={24} color="#CDC1FF" />
              <Text className="text-lg text-primary-200 font-Pmedium ml-3">
                Cập nhật thông tin
              </Text>
            </View>
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Thay đổi thông tin tài khoản"
              icon={<SettingSolidIcon size={24} color="#CDC1FF" />}
            />
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Thay đổi mật khẩu"
              icon={<PasswordLockIcon size={24} color="#CDC1FF" />}
            />
          </View>
          <View>
            <View className="flex-row items-center mt-8">
              <HearIcon size={24} color="#CDC1FF" />
              <Text className="text-lg text-primary-200 font-Pmedium ml-3">
                Giới thiệu
              </Text>
            </View>
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Instagram"
              icon={<InstagramIcon size={24} color="#CDC1FF" />}
            />
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Facebook"
              icon={<FaceBookIcon size={24} color="#CDC1FF" />}
            />
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Chính sách"
              icon={<LockCloseIcon size={24} color="#CDC1FF" />}
            />
          </View>
          <View>
            <View className="flex-row items-center mt-8">
              <DangerIcon size={24} color="#CDC1FF" />
              <Text className="text-lg text-primary-200 font-Pmedium ml-3">
                Thoát
              </Text>
            </View>
            <ProfileItem
              onPress={() => {
                console.log("5 nguoi ban clicked");
              }}
              content="Đăng xuất"
              icon={<ArrowLeftEndLogoutIcon size={24} color="#CDC1FF" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
