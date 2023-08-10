import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardContent = ({children, style}) => {
  return (
    <View style={[styles.content, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 18,
      paddingVertical: 20,
    },
  });

export default CardContent