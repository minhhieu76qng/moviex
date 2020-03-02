import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListMovie from '../../components/ListMovie';

const SearchScreen = ({
  movies,
  loading,
  refreshScreen,
  searchMovies,
  loadMore,
  reset,
}) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <View style={styles.wrapper}>
      <Header />

      <View style={styles.section}>
        <SearchBar onSearch={searchMovies} />
      </View>

      <View style={[styles.section, {flex: 1}]}>
        <ListMovie
          movies={movies}
          refreshing={loading}
          onRefresh={refreshScreen}
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

  section: {
    marginTop: 15,
    paddingHorizontal: 5,
  },
});

export default SearchScreen;
