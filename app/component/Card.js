/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, image, subTitle}) {
  return (
    <View style={styles.cardCon}>
      <Image source={image} style={styles.cardImg} />
      <View style={styles.detailContainer}>
        <AppText style={styles.txt}>{title}</AppText>
        <AppText style={styles.subtxt}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardCon: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  cardImg: {
    width: '100%',
    height: 200,
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
