/* eslint-disable prettier/prettier */
import {useFormikContext} from 'formik';
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';
import React from 'react';
import {StyleSheet} from 'react-native';

function AppFormPicker({items, name, placeholder, StyleSheet}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched} />
    </>
  );
}

export default AppFormPicker;

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 14,
    color: 'red',
  },
});
