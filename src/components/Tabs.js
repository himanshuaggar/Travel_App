import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { theme } from '../theme';

const Tabs = ({items}) => {
  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1">
      <View className="flex flex-row  justify-around items-center mx-4 bg-neutral-200 rounded-full p-2 px-4 space-x-2 mb-4 pt-4">
        {items.map((tab, i) => {
          const active = index === i;
          let activeButtonClass = active? 'bg-white shadow': '';
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              className={`ml-2 mb-2 p-2 px-2 rounded-full flex ${activeButtonClass}`}>
              <Text className='font-semibold' style={{ color: active? theme.text: 'rgba(0,0,0,0.6)'}}>
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