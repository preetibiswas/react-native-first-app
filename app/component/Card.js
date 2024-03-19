/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, image, subTitle, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardCon}>
        <Image source={{uri: image}} style={styles.cardImg} />
        <View style={styles.detailContainer}>
          <AppText style={styles.txt}>{title}</AppText>
          <AppText style={styles.subtxt}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardCon: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    width: '100%',
    height: 300,
  },
  cardImg: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
  },
  detailContainer: {
    padding: 20,
  },
  txt: {
    fontSize: 15,
  },
  subtxt: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
