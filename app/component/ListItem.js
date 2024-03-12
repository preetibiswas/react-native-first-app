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
import Icon from 'react-native-vector-icons/FontAwesome';

function ListItem({
  subtitle,
  title,
  image,
  onpress,
  renderAction,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderAction}>
      <TouchableHighlight underlayColor={colors.light} onPress={onpress}>
        <View style={styles.container}>
          {image && <Image style={styles.img} source={image} />}
          {ImageComponent}
          <View
            style={{marginTop: 5, marginLeft: 10, justifyContent: 'center'}}
          >
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 15, backgroundColor: colors.white},
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
