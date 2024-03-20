/* eslint-disable prettier/prettier */
import {View, Text, Modal, StyleSheet} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

export default function UploadScreen({progress = 0, visible = false, onDone}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            style={{flex: 1, width: 200, height: 200}}
            source={require('../assets/done.json')}
            autoPlay
            loop={false}
            resizeMode="cover"
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
