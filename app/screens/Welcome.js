/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import AppButton from '../component/AppButton';
import colors from '../config/colors';

function Welcome() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoCon}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.logoText}>sell what you Dont Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="login" color="primary" />
        <AppButton title="Registration" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoCon: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logoText: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10,
  },
});

export default Welcome;
