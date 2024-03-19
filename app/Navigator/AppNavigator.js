/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from '../screens/ListingScreen';
import AccountScreen from '../screens/AccountScreen';
import ListEditScreen from '../screens/ListEditScreen';
import Feednavigator from './FeedNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Feed"
      component={Feednavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons color={color} size={size} name="account" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
