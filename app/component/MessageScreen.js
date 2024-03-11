/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {View} from 'react-native';
import ListItemSeperator from './ListItemSeperator';
const message = [
  {id: 1, title: 't1', description: 'D1', image: require('../assets/mosh.jpg')},
  {
    id: 2,
    title: 't2',
    description: 'Twooo',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'ti3',
    description: 'threeen',
    image: require('../assets/mosh.jpg'),
  },
];

function MessageScreen() {
  return (
    <FlatList
      data={message}
      ItemSeparatorComponent={<ListItemSeperator />}
      keyExtractor={messag => messag.id.toString()}
      renderItem={({item}) => (
        <ListItem
          title={item.title}
          image={item.image}
          subtitle={item.description}
          onpress={() => console.log('nidhi')}
          renderAction={() => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{backgroundColor: 'red', width: 70}} />
          )}
        />
      )}
    />
  );
}

export default MessageScreen;
