import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
