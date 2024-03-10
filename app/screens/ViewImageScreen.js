/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require('./../assets/chair.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
