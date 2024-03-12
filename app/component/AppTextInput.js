/* eslint-disable prettier/prettier */
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TextInput, Text, StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.con}>
      <MaterialCommunityIcons size={20} name={icon} style={styles.ico} />
      <TextInput {...otherProps} style={styles.text} styles={styles.text} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  con: {
    borderRadius: 25,
    backgroundColor: colors.light,
    width: '100%',
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  ico: {
    marginRight: 10,
  },
});
