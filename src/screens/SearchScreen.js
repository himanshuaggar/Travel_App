import React from 'react';
import {View} from 'react-native';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import SearchMasonry from '../components/SearchMasonry';
import {SEARCH_ALL, SEARCH_HOTELS, SEARCH_PLACES} from '../data';
import Tabs from '../components/Tabs';

const tabs = [
  {
    title: 'All',
    content: () => <SearchMasonry key="all" list={SEARCH_ALL} />,
  },
  {
    title: 'Places',
    content: () => <SearchMasonry key="places" list={SEARCH_PLACES} />,
  },
  {
    title: 'Hotels',
    content: () => <SearchMasonry key="hotels" list={SEARCH_HOTELS} />,
  },
];

const SearchScreen = () => {
  return (
    <View className="flex-1 bg-gray-100 mt-6">
      <MainHeader title="Search" />
      <SearchInput />
      <Tabs items={tabs} />
    </View>
  );
};


export default SearchScreen;