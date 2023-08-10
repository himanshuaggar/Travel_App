import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { HomeIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/outline"
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    
  return (
    <>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return <HomeIcon size={30} strokeWidth={10} color="black" style={{ color: focused ? 'black' : 'gray'}}  />;
          },
        }}
        // listeners={{
        //     focus:() => {
        //         Animated.spring()
        //     }
        // }}
      />
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: ({focused}) => {
            return <MagnifyingGlassIcon size={30} strokeWidth={1} color="black" style={{ color: focused ? 'black' : 'gray'}} />;
          },
        }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarIcon: ({focused}) => {
            return <HeartIcon size={30} strokeWidth={1} color="black" style={{ color: focused ? 'black' : 'gray'}} />;
          },
        }} />
    </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
