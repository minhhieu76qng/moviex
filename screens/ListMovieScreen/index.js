import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ListMovie from '../../components/ListMovie';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenName from '../../constance/ScreenName';

const ListMovieScreen = ({
  navigation,
  route,
  movies,
  loading,
  refreshScreen,
  loadMore,
}) => {
  const onRefresh = () => {
    refreshScreen();
  };

  const onSearchPress = () => {
    navigation.navigate(ScreenName.Search);
  };

  useEffect(() => {
    refreshScreen();
  }, [refreshScreen]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>{route.name}</Text>
        <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
          <Icon name="search" style={styles.searchIcon} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <ListMovie
          movies={movies}
          refreshing={loading}
          onRefresh={onRefresh}
          loadMore={loadMore}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: '#3d3d3d',
    flex: 1,
  },

  screenHeader: {
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  screenTitle: {
    fontSize: 26,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '700',
    flex: 1,
  },

  searchButton: {
    padding: 15,
  },

  searchIcon: {
    color: 'rgba(255,255,255,0.8)',
  },

  list: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default ListMovieScreen;
