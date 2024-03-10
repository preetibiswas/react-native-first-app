/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: '800',

    color: '#000',
  },
});
