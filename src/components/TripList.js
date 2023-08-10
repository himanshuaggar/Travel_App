import { View, Text, Image, TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-native-shared-element";

export default function TripList({ list }) {
    const navigation = useNavigation()
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <View className="flex flex-row flex-wrap mt-4">
      {list.map((item, index) => {
        return (
          <TouchableOpacity className="mx-4 mb-7" key={item.id} onPress={() => {
            navigation.navigate('TripDetails', { trip : item})
          }}>
            <View
              
              className=" w-40 h-56 bg-white rounded-2xl shadow-sm shadow-black"
            >
              <SharedElement id={`trip.${item.id}.image`}>
              <View className="w-40 h-40 rounded-t-2xl overflow-hidden">
                <Image source={item.image} className="w-40 h-40 resize" />
              </View>
              </SharedElement>
              <View className="flex flex-row items-center mt-1 ml-4 mr-3 ">
                <View className="flex-1">
                  <Text className=" my-1 text-base font-bold">
                    {item.title}
                  </Text>
                  <Text className=" text-base text-slate-500">
                    {item.location}
                  </Text>
                </View>
                {/* <TouchableOpacity
                  onPress={() => toggleFavourite(!isFavourite)}
                  style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                  className="absolute top-1 right-3 rounded-full p-3 z-10"
                >
                  <HeartIcon
                    size={wp(5)}
                    color={isFavourite ? "red" : "white"}
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
