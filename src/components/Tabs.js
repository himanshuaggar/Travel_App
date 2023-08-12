import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

const Tabs = ({items}) => {
  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1">
      <View className="flex flex-row justify-end px-4 pb-3">
        {items.map((tab, i) => {
          const active = index === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              className="ml-3">
              {active && (
                <Animated.View entering={BounceIn} className="absolute top-1 -left-2 w-2 h-2 bg-black rounded-lg" />
              )}
              <Text className={active ? "text-black" : "text-gray-500"}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {items[index].content()}
    </View>
  );
};


export default Tabs;