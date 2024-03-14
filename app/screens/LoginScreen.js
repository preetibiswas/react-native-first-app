/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import AppText from '../component/AppText';
import {Image, View, StyleSheet} from 'react-native';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

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
      {({handleChange, handleSubmit, errors}) => (
        <>
          <View style={styles.con}>
            <Image
              source={require('../assets/logo-red.png')}
              style={styles.logo}
            />
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              onChangeText={handleChange('email')}
            />
            <AppText style={styles.txt}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              onChangeText={handleChange('password')}
              keyboardType="numeric"
            />
            <AppText style={styles.txt}>{errors.password}</AppText>
            <AppButton title="login" onPress={handleSubmit} />
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
