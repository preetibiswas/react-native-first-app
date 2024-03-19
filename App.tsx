// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import React from 'react';
// import {Button, Image, Text, View} from 'react-native';

// const Tweeet = () => {
//   return (
//     <View>
//       <Text>Tweei </Text>{' '}
//     </View>
//   );
// };
// const Fackebook = () => {
//   return (
//     <View>
//       <Text>Facebook </Text>
//     </View>
//   );
// };
// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweet" component={Tweeet} />
//     <Stack.Screen name="Facebook" component={Fackebook} />
//   </Stack.Navigator>
// );

// function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <GestureHandlerRootView style={{flex: 1}}>
//           <StackNavigator />
//         </GestureHandlerRootView>
//       </NavigationContainer>
//     </>
//   );
// }

// export default App;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Button, Image, Text, View, ActivityIndicator} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from './app/Navigator/AuthNavigator';
import AppNavigator from './app/Navigator/AppNavigator';
import ImageInput from './app/component/ImageInput';
import ListEditScreen from './app/screens/ListEditScreen';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Response,
} from 'react-native-image-picker';
import ImageInputList from './app/component/ImageInputList';
import Indicator from './app/component/ActiveIndicator';
import LottieView from 'lottie-react-native';
import ListingScreen from './app/screens/ListingScreen';

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
