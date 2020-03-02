import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenName from '../constance/ScreenName';
import MovieDetail from '../screens/DetailScreen';
import NowPlayingContainer from '../containers/NowPlayingContainer';

const NowPlayingStack = createStackNavigator();

function NowPlayingStackScreen() {
  return (
    <NowPlayingStack.Navigator headerMode="none">
      <NowPlayingStack.Screen
        name={ScreenName.NowPlaying}
        component={NowPlayingContainer}
        options={{
          headerShown: false,
        }}
      />
      <NowPlayingStack.Screen
        name={ScreenName.Detail}
        component={MovieDetail}
      />
    </NowPlayingStack.Navigator>
  );
}

export default NowPlayingStackScreen;
