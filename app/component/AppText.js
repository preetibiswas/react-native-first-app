/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}
export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
});
