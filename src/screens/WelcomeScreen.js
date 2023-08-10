import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {

    const navigation= useNavigation();

  return (
    <View className="flex-1 flex justify-end">
      <Image source={require("../../assets/images/welcome.png")} className="h-full w-full absolute" />
        <LinearGradient
            colors={['transparent', 'rgba(130,105,261,0.8)']}
            style={{width: wp(100), height: hp(70)}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
        />
      <View className="p-5 pb-10 space-y-8">
        <View className="space-y-3">
          <Text className="text-white font-bold text-5xl" style={{ fontSize: wp(10) }}>
            Traveling Made Easy!
          </Text>
          <Text className="text-neutral-300 font-medium" style={{ fontSize: wp(5) }}>
            Experience world's best adventures with us
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Root")} className=" bg-orange-500 mx-auto p-4 rounded-full px-12">
          <Text className="text-white text-xl font-bold" style={{ fontSize: wp(6) }}>
            Let's Go!
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
