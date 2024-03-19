/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import ListItem from './ListItem';

function ListingDetailsScreen({route}) {
  const liting = route.params;
  return (
    <View>
      <Image source={{uri: liting.image}} style={styles.img} />
      <View style={styles.detailCon}>
        <AppText style={styles.title}>{liting.title}</AppText>
        <AppText style={styles.price}>{liting.price}</AppText>
      </View>

      <ListItem
        title="MOsh hamadani "
        image={require('../assets/mosh.jpg')}
        subtitle="5 Listing"
      />
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },
  detailCon: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
