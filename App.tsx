/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Welcome from './app/screens/Welcome';
import Card from './app/component/Card';
import {View} from 'react-native';
import ListingDetailsScreen from './app/component/ListingDetailsScreen';
import MessageScreen from './app/component/MessageScreen';

function App() {
  console.log('preeti');
  return (
    <>
      {/* <Welcome /> */}

      {/* <Card
          title="Red jacket for sale"
          subTitle="$100"
          image={require('./app/assets/jacket.jpg')}
        /> */}
      {/* <ListingDetailsScreen /> */}
      <MessageScreen />

      {/* <ViewImageScreen /> */}
      {/* <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AppText>shdfosiehfcheif</AppText>
        <AppButton title="LOgin" onPress={() => Alert.alert('hello')} />
      </View> */}
    </>
  );
}

export default App;
