/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import AppPicker from './app/component/AppPicker';
import React, {useState} from 'react';
import PickerItem from './app/component/PickerItem';
import LoginScreen from './app/screens/LoginScreen';
import {ListEditScreen} from './app/screens/ListEditScreen';
const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

function App() {
  const [category, setCategory] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          items={categories}
          icon="apps"
          placeholder="Category"
        /> */}
        {/* <LoginScreen /> */}
        <ListEditScreen />
      </GestureHandlerRootView>
    </>
  );
}

export default App;
