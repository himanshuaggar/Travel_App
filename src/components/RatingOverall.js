import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Rating from './Rating';
import {getFractionDigitsRating} from './utils';

const RatingOverall = ({rating, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.rating}>{getFractionDigitsRating(rating)}</Text>
      <View>
        <Text style={styles.caption}>Overall Rating</Text>
        <Rating rating={rating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 32,
    color: '#070f18',
    marginRight: 8,
  },
  caption: {
    fontSize: 12,
    color: '#b2b2b2',
  },
});

export default RatingOverall;