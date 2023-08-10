import { View, Text } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle, Extrapolation, interpolate } from "react-native-reanimated";

export default function CustomBackground({ animatedIndex, style }) {
  const containerStyle = useAnimatedStyle(() => ({
    ...style,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
  return <Animated.View style={containerStyle} />;
}
