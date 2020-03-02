import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailHeader = () => {
  const navigation = useNavigation();

  const onBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert("Can't back!");
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.wrapper} onPress={onBackPress}>
        <Icon name="angle-left" style={styles.text} />
        <Text style={[styles.text, styles.textBack]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  textBack: {
    marginLeft: 10,
  },
});

export default DetailHeader;
