import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import { MagnifyingGlassIcon, FunnelIcon } from 'react-native-heroicons/outline'

const SearchInput = () => {
    const [search, setSearch] = useState('');
  return (
    <View className="px-5 pt-5 pb-3">
      <View className="flex flex-row">
        <View className="absolute top-2 left-2 z-10" pointerEvents="none">
          <MagnifyingGlassIcon size={20} stroke={2} color="black" />
        </View>
        <TextInput
          className="bg-white pl-12 pr-6 py-5 rounded-lg h-14 flex-1 shadow-lg"
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
        <View className="absolute top-2 right-2 z-10">
          <FunnelIcon size={20} stroke={2} color="black" />
        </View>
      </View>
    </View>
  )
}

export default SearchInput