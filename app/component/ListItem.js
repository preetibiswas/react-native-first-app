/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({subtitle, title, image, onpress, renderAction}) {
  return (
    <Swipeable renderRightActions={renderAction}>
      <TouchableHighlight underlayColor={colors.light} onPress={onpress}>
        <View style={styles.container}>
          <Image source={image} style={styles.img} />
          <View style={{marginTop: 5}}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 15},
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 15,
    color: colors.medium,
  },
});
