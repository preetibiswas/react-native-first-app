/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import ImageInput from './ImageInput';

export default function ImageInputList({
  imagUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {imagUris.map(uri => (
        <View key={uri}>
          {' '}
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      <ImageInput onChangeImage={uri => onAddImage(uri)} />
    </View>
  );
}
