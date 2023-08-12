import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchCard from './SearchCard'
import MasonryList  from '@react-native-seoul/masonry-list'

const SearchMasonry = ({list}) => {
  return (
    <MasonryList
    data={list}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={styles.masonry}
    showsVerticalScrollIndicator={false}
    renderItem={({item, i}) => <SearchCard item={item} index={i} />}
    refreshing={false}
  />
  )
}

const styles = StyleSheet.create({
    masonry: {
      paddingHorizontal: 8,
    },
  });

export default SearchMasonry