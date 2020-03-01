import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <View style={styles.wrapper}>
      <Text>header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
});

export default DetailHeader;
