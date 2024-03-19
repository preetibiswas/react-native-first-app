/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import ImageInputList from './ImageInputList';

export default function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const handleAdd = uri => {
    console.log('added');
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = uri => {
    setFieldValue(
      name,
      values[name].filter(imageuri => imageuri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imagUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
