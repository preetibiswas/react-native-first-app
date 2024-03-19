/* eslint-disable curly */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Response,
} from 'react-native-image-picker';

export default function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) openImagePicker();
    else
      Alert.alert('Delete', 'Are you sure you want to delete', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancled image ');
      } else if (response.errorCode) {
        console.log('image picker error', response.errorMessage);
      } else {
        const imgUri = response.assets?.[0]?.uri;
        console.log(imgUri);
        onChangeImage(imgUri);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.img} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    overflow: 'hidden',

    borderRadius: 15,
  },
  img: {
    height: '100%',
    width: '100%',
  },
});
