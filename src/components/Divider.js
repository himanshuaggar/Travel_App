import React, {forwardRef} from 'react';
import {View} from 'react-native';


const Divider = forwardRef(({style, enabledSpacing = true}, ref) => {
  return (
    <View ref={ref} style={[{
          height: 1,
          backgroundColor: '#b2b2b2',
          marginHorizontal: enabledSpacing ? 16 : 0,
        },style,]}/>
  );
});

export default Divider;
