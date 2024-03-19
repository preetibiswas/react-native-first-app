/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingDetailsScreen from '../component/ListingDetailsScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createNativeStackNavigator();

const Feednavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Listing"
      component={ListingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Listing Details"
      component={ListingDetailsScreen}
      // options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Feednavigator;
