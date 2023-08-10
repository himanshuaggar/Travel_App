import { View, Text, Image } from 'react-native'
import React from 'react'
import Divider from './Divider'
import Rating from './Rating'

const Review = ({review}) => {
  return (
    <>
    <Divider enabledSpacing={false} />
    <View className="my-5">
        <View className="flex flex-row items-center mb-2">
            <Image source={review.author.avatar} className="h-10 w-10 resize rounded-full mr-2" />
            <View className="flex-1 mr-4">
                <Text className="text-black text-base font-bold mb-1">{review.author.username}</Text>
                <Text className="text-sm text-gray-600">{review.date}</Text>
            </View>
            <Rating rating={review.rating} showLabelTop />
        </View>
        <Text className="text-gray-500">{review.text}</Text>
    </View>
    </>
  )
}

export default Review