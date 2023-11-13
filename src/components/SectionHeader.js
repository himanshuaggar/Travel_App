import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SectionHeader({title, onPress, buttonTitle = 'Button', containerStyle, titleStyle}) {
  return (
    <View className="flex flex-row justify-between items-center mt-6 mb-2 space-x-6" style={containerStyle}>
      <Text className="font-bold text-lg ml-4" style={titleStyle}>{title}</Text>
      {onPress && <TouchableOpacity className=" mr-4 "   onPress={onPress} ><Text className=" text-base font-medium text-orange-600">{buttonTitle}</Text></TouchableOpacity> }
    </View>
  )
}