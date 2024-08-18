// src/screens/ImageDetailScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
//import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

interface Props {
  route: RouteProp<RootStackParamList, 'ImageDetail'>;
}

const ImageDetailScreen: React.FC<Props> = ({route}) => {
  const {imageId} = route.params;
  const image = useSelector((state: RootState) =>
    state.gallery.images.find(img => img.id === imageId),
  );

  if (!image) {
    return null; // Handle case where image is not found
  }

  return (
    <ImageBackground source={require("../assets/background_image.webp")} style ={styles.container}>
          <View style={styles.overlay} />
      {/* <FastImage
        style={styles.image}
        source={{
          uri: image.url,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
      <Image
        style={styles.image}
        source={{
          uri: image.url,
        }}
        resizeMode="contain"
       />
      <Text style={styles.title}>{image.title}</Text>
      </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 66, 165, 0.5)',
  },
});

export default ImageDetailScreen;
