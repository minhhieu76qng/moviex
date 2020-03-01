import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenName from './constance/ScreenName';
import NowPlayingStackScreen from './navigations/NowPlayingStack';
import TopRatedStackScreen from './navigations/TopRatedStack';
import FavoriteStackScreen from './navigations/FavoriteStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
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
            component={NowPlayingStackScreen}
          />
          <Tab.Screen
            name={ScreenName.TopRated}
            component={TopRatedStackScreen}
          />
          <Tab.Screen
            name={ScreenName.Favorite}
            component={FavoriteStackScreen}
          />
        </Tab.Navigator>
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
