import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({children, style, onPress, }) => {
  return (
    <TouchableOpacity className="shadow" onPress={onPress} style={[styles.card, style,]}>
        <View className="w-full h-full">{children}</View >
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    card: {
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 16,
    },
})

export default Card