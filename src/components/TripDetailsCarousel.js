import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function TripDetailsCarousel({slides, id}) {
  return (
    <FlatList style={[StyleSheet.absoluteFillObject]} data={slides} renderItem={({item: image}) => {
        return(
            <View className="overflow-hidden rounded" style={[StyleSheet.absoluteFillObject]}>
                <Image source={image} className="w-full h-full resize" style={[StyleSheet.absoluteFillObject]} />
            </View>
        )
    }} />

  )
}