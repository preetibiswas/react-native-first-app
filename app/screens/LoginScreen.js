/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import AppText from '../component/AppText';
import {Image, View, StyleSheet} from 'react-native';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../component/ErrorMessage';
import AppFormField from '../component/AppFormField';
import SubmitButton from '../component/SubmitButton';
import AppForm from '../component/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
        <>
          <View style={styles.con}>
            <Image
              source={require('../assets/logo-red.png')}
              style={styles.logo}
            />

            <AppTextInput
              onBlur={() => setFieldTouched('email')}
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              onBlur={() => setFieldTouched('password')}
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              onChangeText={handleChange('password')}
              keyboardType="numeric"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            {/* <AppButton title="login" onPress={handleSubmit} /> */}
            <SubmitButton title="login" />
          </View>
        </>
      )}
    </Formik>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  con: {
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  txt: {
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
  },
});
