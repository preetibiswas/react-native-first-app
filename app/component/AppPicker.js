/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';
import colors from '../config/colors';
import PickerItem from './PickerItem';

function AppPicker({icon, items, placeholder, onSelectItem, selectedItem}) {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalvisible(true)}>
        <View style={styles.con}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.secondary}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? (
              <AppText style={styles.txt}>{selectedItem.label}</AppText>
            ) : (
              placeholder
            )}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalvisible} animationType="fade">
        <Button
          title="close"
          onPress={() => setModalvisible(false)}
          style={styles.btn}
        />
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItem
              label={item.label}
              onpress={() => {
                setModalvisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  btn: {
    backgroundColor: 'red',
    padding: 20,
    margin: 20,
  },
  txt: {
    fontSize: 15,
    flex: 1,
  },
  placeholder: {color: colors.light, fontSize: 15},
});
