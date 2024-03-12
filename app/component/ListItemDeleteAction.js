/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

function ListItemDeleteAction({onpress}) {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <View style={styles.container}></View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: 'red',
  },
});
