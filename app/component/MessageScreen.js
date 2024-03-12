/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {View} from 'react-native';
import ListItemSeperator from './ListItemSeperator';
import ListItemDeleteAction from './ListItemDeleteAction';
const initialmessage = [
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
  const [message, setMessage] = useState(initialmessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleMessage = messag => {
    setMessage(message.filter(m => m.id !== messag.id));
  };
  return (
    <FlatList
      data={message}
      refreshing={refreshing}
      onRefresh={() =>
        setMessage([
          {
            id: 3,
            title: 'ti3',
            description: 'threeen',
            image: require('../assets/mosh.jpg'),
          },
        ])
      }
      ItemSeparatorComponent={<ListItemSeperator />}
      keyExtractor={messag => messag.id.toString()}
      renderItem={({item}) => (
        <ListItem
          title={item.title}
          image={item.image}
          subtitle={item.description}
          onpress={() => console.log('nidhi')}
          renderAction={() => (
            <ListItemDeleteAction onpress={() => handleMessage(item)} />
          )}
        />
      )}
    />
  );
}

export default MessageScreen;
