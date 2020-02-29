import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenName from '../constance/ScreenName';
import TopRated from '../screens/TopRated';
import MovieDetail from '../screens/DetailScreen';

const TopRatedStack = createStackNavigator();

function TopRatedStackScreen() {
  return (
    <TopRatedStack.Navigator>
      <TopRatedStack.Screen name={ScreenName.TopRated} component={TopRated} />
      <TopRatedStack.Screen name={ScreenName.Detail} component={MovieDetail} />
    </TopRatedStack.Navigator>
  );
}

export default TopRatedStackScreen;
