import { View, Text } from 'react-native'
import React from 'react'
import Review from './Review'

const Reviews = ({reviews = []}) => {
  return (
    <View className="mx-4">
      
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </View>
  )
}

export default Reviews