/* eslint-disable react-native/no-inline-styles */
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            style={{
              marginTop: 5,
              marginLeft: 10,
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors.medium}
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
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
