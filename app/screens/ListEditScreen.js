/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import AppButton from '../component/AppButton';
import AppText from '../component/AppText';
import ErrorMessage from '../component/ErrorMessage';
import AppTextInput from '../component/AppTextInput';
import * as Yup from 'yup';
import AppFormPicker from '../component/AppFormPicker';
import ImageInput from '../component/ImageInput';
import ImageInputList from '../component/ImageInputList';
import FormImagePicker from '../component/FormImagePicker';
import ActiveIndicator from '../component/ActiveIndicator';
import listingApi from '../api/listing';
import axios from 'axios';
import UploadScreen from './UploadScreen';

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
  images: Yup.array().min(1, 'Please select atleat one image'),
});

const ListEditScreen = props => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, {resetForm}) => {
    console.log(listing);
    setProgress(0);
    setUploadVisible(true);
    try {
      const response = await axios.post(
        'https://fakestoreapi.com/products',
        {
          title: listing.title,
          price: listing.price,
          description: listing.description,
          image: listing.images,
          category: listing.category.label,
        },
        {
          onUploadProgress: progressEvent => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setProgress(percentCompleted);
            console.log(`Upload Progress: ${percentCompleted}%`);
          },
        },
      );
      resetForm();

      console.log('preeti bisaea', response.data);
      Alert.alert('success');
    } catch (error) {
      setUploadVisible(false);
      Alert.alert('Error', error);
    }
  };
  return (
    <Formik
      initialValues={{
        title: '',
        price: '',
        category: null,
        description: '',
        images: [],
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleSubmit,
        errors,
        setFieldTouched,
        touched,
        setFieldValue,
        value,
        values,
      }) => (
        <>
          <View style={styles.con}>
            <ActiveIndicator visible={true} />
            <UploadScreen
              progress={progress}
              visible={uploadVisible}
              onDone={() => setUploadVisible(false)}
            />
            <FormImagePicker name="images" />
            <ErrorMessage error={errors.images} visible={touched.title} />
            <AppTextInput
              maxLength={255}
              placeholder="Title"
              onChangeText={txt => setFieldValue('title', txt)}
              onBlur={() => setFieldTouched('title')}
              autoCapitalize="none"
              value={values.title}
            />
            <ErrorMessage error={errors.title} visible={touched.title} />
            <AppTextInput
              keyboardType="numeric"
              maxLength={8}
              value={values.price}
              placeholder="Price"
              onChangeText={txt => setFieldValue('price', txt)}
              // onChangeText={handleChange('price')}
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
              onChangeText={txt => setFieldValue('description', txt)}
              value={values.description}
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

export default ListEditScreen;
