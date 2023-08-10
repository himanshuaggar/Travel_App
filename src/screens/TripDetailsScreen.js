import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ChevronLeftIcon } from'react-native-heroicons/outline'
import { SharedElement } from "react-native-shared-element";
import TripDetailsCard from "../components/TripDetailsCard";
import * as Animatable from 'react-native-animatable';
import TripDetailsCarousel from "../components/TripDetailsCarousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TripDetailsScreen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { trip } = route.params;
  
  return (
    <View className="flex-1">
        <Animatable.View className="absolute z-10 left-2 mt-4" animation="fadeIn" delay={500} duration={400} easing="ease-in-out">
        <ChevronLeftIcon size={30} color="white" onPress={navigation.goBack} />
        </Animatable.View>
        {/* <TripDetailsCarousel slides={slides} /> */}
        <SharedElement id={`trip.${trip.id}.image`} style={StyleSheet.absoluteFillObject} >
      <View className="overflow-hidden rounded" style={[StyleSheet.absoluteFillObject]}>
        <Image source={trip.image} className="w-full h-full" style={[StyleSheet.absoluteFillObject]} />
      </View>
      </SharedElement>
      <TripDetailsCard trip={trip} />
    </View>
  );
};

TripDetailsScreen.sharedElements = route => {
  const { trip } = route.params;

  return[
    {
      id:`trip.${trip.id}.image`
    }
  ]
}
