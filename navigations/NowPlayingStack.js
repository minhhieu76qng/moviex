import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenName from '../constance/ScreenName';
import NowPlaying from '../screens/NowPlaying';
import MovieDetail from '../screens/DetailScreen';

const NowPlayingStack = createStackNavigator();

function NowPlayingStackScreen() {
  return (
    <NowPlayingStack.Navigator headerMode="none">
      <NowPlayingStack.Screen
        name={ScreenName.NowPlaying}
        component={NowPlaying}
      />
      <NowPlayingStack.Screen
        name={ScreenName.Detail}
        component={MovieDetail}
      />
    </NowPlayingStack.Navigator>
  );
}

export default NowPlayingStackScreen;
