/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Card from '../component/Card';
import colors from '../config/colors';
import axios from 'axios';
import listingapi from '../api/listing';
import AppText from '../component/AppText';
import AppButton from '../component/AppButton';
import useApi from '../hooks/useApi';

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

function ListingScreen({navigation}) {
  const {data: list, error, loading, request: loadlist} = useApi(
    listingapi.getListing,
  );
  // const [list, setLis] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // calling api
  useEffect(() => {
    loadlist();
  }, []);
  // const listing = async () => {
  //   setLoading(true);
  //   const response = await listingapi.getListing();
  //   setLoading(false);
  //   if (!response.ok) {
  //     return setError(true);
  //   }
  //   setError(false);
  //   setLis(response.data);
  // };
  return (
    <View style={styles.con}>
      <ActivityIndicator animating={loading} size="large" />
      {error && (
        <>
          <AppText>could't retrive the listing </AppText>
          <AppButton title="Retry" onPress={loadlist} />
        </>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        // data={Listings}
        data={list}
        keyExtractor={lists => lists.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate('Listing Details', item)}
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
