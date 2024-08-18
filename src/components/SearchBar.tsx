import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  query: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => (
  <View style={styles.container}>
    <Icon name="image-search"  size={24} color="#aaa" style={styles.icon} />
    <TextInput
      style={styles.searchBar}
      placeholder="Search images..."
      placeholderTextColor="#aaa"
      value={query}
      onChangeText={onChange}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
