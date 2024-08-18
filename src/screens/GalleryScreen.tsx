import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {loadImages, filterImages} from '../redux/slices/gallerySlice';
import ImageItem from '../components/ImageItem';
import SearchBar from '../components/SearchBar';
import {ImageBackground} from 'react-native';

const GalleryScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const images = useSelector(
    (state: RootState) => state.gallery.filteredImages,
  );
  const loading = useSelector((state: RootState) => state.gallery.loading);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {width} = Dimensions.get('window');
  const numColumns = Math.floor(width / 100);
  useEffect(() => {
    dispatch(loadImages(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    dispatch(filterImages(text));
  };

  return (
    <ImageBackground
      source={require('../assets/background_image.webp')}
      style={styles.container}>
      <View style={styles.overlay} />
      <SearchBar query={query} onChange={handleSearch} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={images}
          numColumns={numColumns}
          renderItem={({item}) => (
            <ImageItem
              item={item}
              onPress={() =>
                navigation.navigate('ImageDetail', {imageId: item.id})
              }
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      </View>
    </ImageBackground>
  );
};

export default GalleryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingTop: 30,
  },
  flatListContainer: {
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 66, 165, 0.5)',
  },
});
