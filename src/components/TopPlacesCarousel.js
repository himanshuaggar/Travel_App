import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import FavoriteButton from "./FavoriteButton";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-native-shared-element";

const CARD_WIDTH_SPACING = 288 + 24;

export default function TopPlacesCarousel({ list }) {
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={list}
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            className="ml-3 mr-3 mt-3"
            onPress={() => {
              navigation.navigate("TripDetails", { trip: item });
            }}
          >
            <View className="h-52 w-72 shadow-2xl bg-white rounded-2xl">
              <TouchableOpacity
                onPress={() => toggleFavourite(!isFavourite)}
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                className="absolute top-1 right-3 rounded-full p-3 z-10"
              >
                <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
              </TouchableOpacity>
              <SharedElement id={`trip.${item.id}.image`}>
                <View className="h-52 w-72 rounded-2xl overflow-hidden">
                  <Image source={item.image} className="h-52 w-72 resize" />
                </View>
              </SharedElement>
              <View className="absolute left-4 top-28">
                <Text className="text-2xl font-bold text-white">
                  {item.title}
                </Text>
                <Text className="text-xl font-normal text-white">
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
