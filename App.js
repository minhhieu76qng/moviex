import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import ScreenName from './constance/ScreenName';
import MovieDetail from './screens/DetailScreen';
import NowPlayingContainer from './containers/NowPlayingContainer';
import Favorite from './screens/Favorite';
import SearchContainer from './containers/SearchContainer';
import TopRatedContainer from './containers/TopRatedContainer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case ScreenName.NowPlaying:
              iconName = 'film';
              break;
            case ScreenName.TopRated:
              iconName = 'star';
              break;
            case ScreenName.Favorite:
              iconName = 'heart';
              break;
            default:
              iconName = '';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name={ScreenName.NowPlaying}
        component={NowPlayingContainer}
      />
      <Tab.Screen name={ScreenName.TopRated} component={TopRatedContainer} />
      <Tab.Screen name={ScreenName.Favorite} component={Favorite} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={ScreenName.NowPlaying} component={MyTab} />
          <Stack.Screen name={ScreenName.Search} component={SearchContainer} />
          <Stack.Screen name={ScreenName.Detail} component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
