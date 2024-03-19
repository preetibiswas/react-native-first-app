/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="ListingScreen" component={ListingScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
