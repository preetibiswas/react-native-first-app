/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';

function App() {
  console.log('preeti');
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <AccountScreen />
      </GestureHandlerRootView>
    </>
  );
}

export default App;
