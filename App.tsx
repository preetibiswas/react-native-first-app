/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Welcome from './app/screens/Welcome';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/component/AppText';
import {View, Alert} from 'react-native';
import AppButton from './app/component/AppButton';

function App() {
  console.log('preeti');
  return (
    <>
      <Welcome />
      {/* <ViewImageScreen /> */}
      {/* <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AppText>shdfosiehfcheif</AppText>
        <AppButton title="LOgin" onPress={() => Alert.alert('hello')} />
      </View> */}
    </>
  );
}

export default App;
