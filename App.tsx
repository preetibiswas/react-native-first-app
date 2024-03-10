/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Welcome from './app/screens/Welcome';
import Card from './app/component/Card';
import {View} from 'react-native';

function App() {
  console.log('preeti');
  return (
    <>
      {/* <Welcome /> */}
      <View
        style={{
          backgroundColor: '#f8f4f4',
          padding: 20,
          paddingTop: 100,
          flex: 1,
        }}
      >
        <Card
          title="Red jacket for sale"
          subTitle="$100"
          image={require('./app/assets/jacket.jpg')}
        />
      </View>

      {/* <ViewImageScreen /> */}
      {/* <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AppText>shdfosiehfcheif</AppText>
        <AppButton title="LOgin" onPress={() => Alert.alert('hello')} />
      </View> */}
    </>
  );
}

export default App;
