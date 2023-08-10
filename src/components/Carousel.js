import { View, Text, FlatList } from "react-native";
import React from "react";

const CARD_WIDTH_SPACING = 288 + 24;

const Carousel = ({ renderItem, items= [] }) => {
  return (
    <FlatList
      horizontal
      data={items}
      className="py-4"
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={ i => i.id}
      renderItem={({ item, index }) => {
        if (renderItem) {
          return renderItem({
            item,
            index,
            style: {
             width: 288,
              marginLeft: 12,
              marginRight:
                index === items.length - 1 ? 12 : 0,
            },
          });
        }
        return null;
      }}
      
    />
  );
};

export default Carousel;
