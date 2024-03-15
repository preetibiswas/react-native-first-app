/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import AppButton from '../component/AppButton';
import AppText from '../component/AppText';
import ErrorMessage from '../component/ErrorMessage';
import AppTextInput from '../component/AppTextInput';
import * as Yup from 'yup';
import AppFormPicker from '../component/AppFormPicker';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().required().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

export const ListEditScreen = props => {
  return (
    <Formik
      initialValues={{title: '', price: '', category: null, description: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
        <>
          <View style={styles.con}>
            <AppTextInput
              maxLength={255}
              placeholder="Title"
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
              autoCapitalize="none"
            />
            <ErrorMessage error={errors.title} visible={touched.title} />
            <AppTextInput
              keyboardType="numeric"
              maxLength={8}
              placeholder="Price"
              onChangeText={handleChange('price')}
              onBlur={() => setFieldTouched('price')}
              autoCapitalize="none"
            />
            <ErrorMessage error={errors.price} visible={touched.price} />
            <AppFormPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <ErrorMessage error={errors.category} visible={touched.category} />
            <AppTextInput
              maxLength={255}
              multiline
              numberOfLines={3}
              placeholder="Description"
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              autoCapitalize="none"
            />
            <ErrorMessage
              error={errors.description}
              visible={touched.description}
            />
            <AppButton title="Post" onPress={handleSubmit} />
          </View>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  con: {
    padding: 20,
  },
});
