/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

function Welcome() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.loginbtn}></View>
      <View style={styles.registerbtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginbtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerbtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default Welcome;
