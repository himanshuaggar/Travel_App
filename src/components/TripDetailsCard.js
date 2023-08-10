import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import * as Animatable from "react-native-animatable";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomHandler from "./CustomHandler";
import CustomBackground from "./CustomBackground";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  Extrapolation,
  interpolate,
} from "react-native-reanimated";
import { MapPinIcon } from "react-native-heroicons/outline";
import Divider from "./Divider";
import SectionHeader from "./SectionHeader";
import RatingOverall from "./RatingOverall";
import HotelCarousel from "./HotelCarousel";
import Reviews from "./Reviews";

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

export default function TripDetailsCard({ trip }) {
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ["33%", "80%"], []);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(animatedIndex.value, [0, 0.08], ["white", "black"]),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(animatedIndex.value, [0, 0.08], ["white", "gray"]),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [32, 20],
      Extrapolation.CLAMP
    ),
  }));

  const locationIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [0, 1],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        handleComponent={CustomHandler}
        backgroundComponent={CustomBackground}
        animatedIndex={animatedIndex}
      >
        <Animatable.View
          style={styles.header}
          animation="fadeInUp"
          delay={500}
          duration={400}
          easing="ease-in-out"
        >
          <Animated.Text style={[styles.title, titleStyle]}>
            {trip.title}
          </Animated.Text>
          <View style={styles.location}>
            <Animated.Text style={[styles.locationText, locationStyle]}>
              {trip.location}
            </Animated.Text>
            <Animated.View style={locationIconStyle}>
              <MapPinIcon size={30} stroke={3} style={styles.locationIcon} />
            </Animated.View>
          </View>
        </Animatable.View>
        <AnimatedDivider style={contentStyle} />
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Animated.View style={contentStyle}>
          <RatingOverall rating={trip.rating} containerStyle={styles.rating} />
          <SectionHeader
            title="Summary"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
          />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.description}</Text>
          </View>
          <SectionHeader
            title="Hotels"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
            onPress={() => {}}
            buttonTitle="See All"
          />
          <HotelCarousel hotels={trip.hotels} />
          <SectionHeader
            title="Reviews"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
            onPress={() => {}}
            buttonTitle="See All"
          />
          <Reviews reviews={trip.reviews}  />
          </Animated.View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
  // return (
  //   <View className="absolute bottom-0 left-0 right-0 h-2/6">
  //     <Animatable.View className="px-6 py-6" animation="fadeInUp" delay={500} duration={400} easing="ease-in-out">
  //     <Text className="text-3xl font-bold text-white">{trip.title}</Text>
  //     <Text className="text-3xl text-white">{trip.location}</Text>
  //     </Animatable.View>
  //   </View>
  // )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationText: {
    fontSize: 32,
    color: "white",
  },
  locationIcon: {
    tintColor: "gray",
  },
  scrollBox: {
    marginTop: 8,
    marginBottom: 18,
  },
  sectionHeader: {
    marginTop: 18,
  },
  sectionTitle: {
    color: "gray",
    fontWeight: "normal",
  },
  summary: {
    marginHorizontal: 24,
  },
  summaryText: {
    color: "black",
  },
  rating: {
    marginHorizontal: 24,
    marginTop:10,
  },
});
