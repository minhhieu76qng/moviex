import React, {useState, createRef, useEffect} from 'react';
import {View, TextInput, StyleSheet, Keyboard, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const inputRef = createRef();

  useEffect(() => {
    const keyboardHiddenListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        inputRef.current.blur();
      },
    );
    return () => {
      keyboardHiddenListener.remove();
    };
  }, [inputRef]);

  const handleChange = text => {
    setValue(text);
  };

  const handleRemove = () => {
    setValue('');
  };

  const showStyle = {
    opacity: value.length > 0 ? 1 : 0,
  };

  return (
    <View style={styles.searchBox}>
      <Icon style={[styles.btnIcon, styles.searchIcon]} name="search" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#c8d6e5"
        onSubmitEditing={() => console.log('submit')}
        value={value}
        onChangeText={handleChange}
        ref={inputRef}
      />

      <Icon
        style={[styles.btnIcon, styles.removeIcon, showStyle]}
        name="times"
        onPress={handleRemove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    position: 'relative',
    fontSize: 14,
  },
  searchBar: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#576574',
    height: 40,
    color: '#c8d6e5',
    position: 'relative',
    paddingHorizontal: 40,
  },
  btnIcon: {
    lineHeight: 40,
    color: '#576574',
    fontSize: 18,
  },
  searchIcon: {
    left: 16,
    position: 'absolute',
  },
  removeIcon: {
    right: 16,
    position: 'absolute',
    color: '#e74c3c',
  },
});

export default SearchBar;
