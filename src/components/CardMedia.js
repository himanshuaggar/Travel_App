import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CardMedia = ({source, borderBottomRadius = false}) => {
  return (
    <View
      style={[styles.media].concat(
        borderBottomRadius ? styles.borderBottomRadius : null,
      )}>
      <Image className="h-full w-full resize" source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },

  borderBottomRadius: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default CardMedia;