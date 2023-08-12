import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './Card'
import CardMedia from'./CardMedia';
import CardContent from './CardContent';
import Animated, {FadeInDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const SearchCard = ({item, index}) => {
  const navigation = useNavigation();
  const even = index % 2 === 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index < 6 ? index * 80 : 0)}
      style={{
        paddingTop: index === 1 ? 24 : 0,
        paddingLeft: !even ? 12 : 0,
        paddingRight: even ? 12 : 0,
        paddingBottom: 24,
      }}>
      <Card
        onPress={() => {
          item.type === 'PLACE'
            ? navigation.navigate('TripDetails', {trip: item})
            : null;
        }}
        style={{
          width: '100%',
          height: index % 3 === 0 ? 180 : 240,
        }}>
        
        <SharedElement id={`trip.${item.id}.image`} className="flex-1">
          <CardMedia source={item.image} borderBottomRadius />
        </SharedElement>
        <CardContent>
          <View className="flex-1">
            <Text className="text-lg font-bold text-black my-1" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="text-base text-gray-600">{item.location}</Text>
          </View>
        </CardContent>
      </Card>
    </Animated.View>
  );
};



export default SearchCard;