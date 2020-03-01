import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenName from '../constance/ScreenName';
import Favorite from '../screens/Favorite';
import MovieDetail from '../screens/DetailScreen';

const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator headerMode="float">
      <FavoriteStack.Screen
        name={ScreenName.Favorite}
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <FavoriteStack.Screen name={ScreenName.Detail} component={MovieDetail} />
    </FavoriteStack.Navigator>
  );
}

export default FavoriteStackScreen;
