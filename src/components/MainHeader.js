import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Bars3Icon, BellIcon } from 'react-native-heroicons/outline'


export default function MainHeader({title}) {
    const insets = useSafeAreaInsets();
  return (
    <View className="flex flex-row justify-between items-center px-6" style={{marginTop: insets.top}}>
        <Bars3Icon size={30} strokeWidth={1} color="black" onPress={() => {}} />
      <Text className="font-bold text-xl">{title}</Text>
      <BellIcon size={30} color="black" onPress={() => {}} />
    </View>
  )
}