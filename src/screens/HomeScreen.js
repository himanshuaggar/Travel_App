import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import Destinations from "../components/destinations";
import SortCategories from "../components/sortCategories";

function HomeScreen() {
  return (
    <SafeAreaView
      style={{ marginTop: StatusBar.currentHeight }}
      className="flex-1 bg-white"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="space-y-6 mt-6"
      >
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-500"
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        <View className="mx-5 mb-4">
          <View className=" flex flex-row items-center bg-neutral-100 rounded-full p-4">
            <MagnifyingGlassIcon size={20} strokeWidth={4} color="gray" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            ></TextInput>
          </View>
        </View>

        <View className="mb-4">
          <Categories />
        </View>

        {/* sort categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
