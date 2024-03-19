/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function Indicator({visible = false}) {
  if (!visible) {
    return null;
  }
  return <LottieView autoPlay loop source={require('../assets/ani.json')} />;
}
