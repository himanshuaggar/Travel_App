import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SectionHeader({title, onPress, buttonTitle = 'Button', containerStyle, titleStyle}) {
  return (
    <View className="flex flex-row justify-between items-center mt-6 mb-2 space-x-6" style={containerStyle}>
      <Text className="font-bold text-lg ml-4" style={titleStyle}>{title}</Text>
      {onPress && <Button className="no-underline border-none mr-4"  title={buttonTitle} onPress={onPress} /> }
    </View>
  )
}