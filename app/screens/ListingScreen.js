/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from '../component/Card';
import colors from '../config/colors';

const Listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 908,
    image: require('../assets/chair.jpg'),
  },
  {
    id: 3,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
];

function ListingScreen() {
  return (
    <View style={styles.con}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  con: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
