import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = () => {
    return <View>
      <ImageDetail title="Forest" imageSource={require('/home/linuxdev/Downloads/rn-starter/rn-starter/assets/forest.jpg')} imageScore='9'/>
      <ImageDetail  title="Beach" imageSource={require('/home/linuxdev/Downloads/rn-starter/rn-starter/assets/beach.jpg')} imageScore='7'/>
      <ImageDetail title="Mountain" imageSource={require('/home/linuxdev/Downloads/rn-starter/rn-starter/assets/mountain.jpg')} imageScore='4'/>
    </View>;
};

const styles = StyleSheet.create({});

export default ImageScreen;