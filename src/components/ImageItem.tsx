import React from 'react';
import {TouchableOpacity, StyleSheet, Image as ItemImage} from 'react-native';
//import FastImage from 'react-native-fast-image';
import {Image} from '../interfaces/Image';

interface Props {
  item: Image;
  onPress: () => void;
}

const ImageItem: React.FC<Props> = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    {/* <FastImage
      style={styles.thumbnail}
      source={{
        uri: item.thumbnailUrl,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    /> */}
    <ItemImage
      style={styles.thumbnail}
      source={{
        uri: item.thumbnailUrl,
      }}
      resizeMode="cover"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
});

export default ImageItem;
