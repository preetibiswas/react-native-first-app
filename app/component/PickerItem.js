/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import AppText from './AppText';

function PickerItem({label, onpress}) {
  return (
    <TouchableOpacity onPress={onpress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
  },
});
