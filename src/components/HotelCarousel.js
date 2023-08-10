import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";
import { MapPinIcon } from 'react-native-heroicons/outline'
import Rating from "./Rating";
import RatingOverall from "./RatingOverall";

const CARD_HEIGHT = 260;

const HotelCarousel = ({ hotels }) => {
  return (
    <Carousel
      items={hotels}
      renderItem={({ item, style }) => {
        return (
          <Card style={[styles.card,style]}>
            <CardMedia source={item.image} borderBottomRadius />
            <CardContent style={styles.content}>
              <View className="flex-1">
                <Text className="text-base font-bold text-black">{item.title}</Text>
                <View className="flex flex-row items-center pt-1">
                  <Text className="text-sm text-gray-400">{item.location}</Text>
                  <MapPinIcon size={30} stroke={2} className="  text-gray-400" />
                </View>
                <Rating rating={item.rating} size={12} />
              </View>
              <View className="items-end shrink-0">
                <Text className="text-lg font-bold text-black">{item.pricePeerDay}</Text>
                <Text className="text-sm text-gray-400 mt-1">peer day</Text>
              </View>
            </CardContent>
          </Card>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,

  },
  content: {
    height: 108,
    marginBottom:10,
  },
  rating: {
    marginHorizontal: 24,
    marginTop:14,
  },
  
});

export default HotelCarousel;
