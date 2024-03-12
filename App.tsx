/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput} from 'react-native';
import React, {useState} from 'react';
function App() {
  const [name, setName] = useState('');
  console;
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <Text>{name}</Text>
        <TextInput
          style={{borderWidth: 2}}
          placeholder="FirstName"
          value={name}
          onChangeText={e => setName(e)}
          secureTextEntry
          clearButtonMode="always"
        />
      </GestureHandlerRootView>
    </>
  );
}

export default App;
