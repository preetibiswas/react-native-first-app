/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: colors[color]}]}
      onPress={onPress}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    textTransform: 'uppercase',
  },
});
