/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from './app/component/AppTextInput';
function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
