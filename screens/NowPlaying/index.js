import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import ListMovie from '../../components/ListMovie';
import SearchBar from '../../components/SearchBar';

const NowPlaying = ({movies, loading, refreshNowPlaying}) => {
  const onRefresh = () => {
    refreshNowPlaying();
  };

  useEffect(() => {
    refreshNowPlaying();
  }, [refreshNowPlaying]);

  return (
    <View style={styles.homeWrapper}>
      <SearchBar />
      <View style={styles.list}>
        <ListMovie movies={movies} refreshing={loading} onRefresh={onRefresh} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    position: 'relative',
    backgroundColor: '#3d3d3d',
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 15,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default NowPlaying;
