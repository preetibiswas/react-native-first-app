/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import AppText from '../component/AppText';
import {Image, View, StyleSheet} from 'react-native';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  return (
    <View style={styles.con}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none"
        icon="email"
        placeholder="Email"
        autoCorrect={false}
        onChangeText={e => setEmail(e)}
      />
      <AppTextInput
        autoCapitalize="none"
        icon="lock"
        placeholder="Password"
        autoCorrect={false}
        onChangeText={e => setPassword(e)}
        keyboardType="numeric"
      />
      <AppButton title="login" onPress={() => console.log(email, password)} />
    </View>
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
});
