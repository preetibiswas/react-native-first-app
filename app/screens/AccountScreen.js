/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../component/ListItem';
import {FlatList} from 'react-native';
import colors from '../config/colors';
import AppIcon from '../component/AppIcon';

const menuIcon = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Message',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen() {
  return (
    <View style={styles.scr}>
      <View style={styles.container}>
        <ListItem
          title="Preeti Biswas"
          subtitle="a good software developer"
          image={require('../assets/mosh.jpg')}
        />
        <View style={styles.container}>
          <FlatList
            data={menuIcon}
            keyExtractor={menu => menu.title}
            renderItem={({item}) => (
              <ListItem
                title={item.title}
                ImageComponent={
                  <AppIcon
                    name={item.icon.name}
                    backgroundcolor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
        <ListItem
          title="logout"
          ImageComponent={<AppIcon name="logout" backgroundcolor="#ffe66d" />}
        />
      </View>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  scr: {backgroundColor: colors.light, flex: 1},
  container: {
    marginVertical: 20,
  },
});
