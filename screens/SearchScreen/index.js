import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ListMovie from '../../components/ListMovie';

const SearchScreen = ({
  movies,
  loading,
  text,
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

      {text && (
        <View style={[styles.section, styles.ntBox]}>
          <Text style={styles.ntText}>
            Display results for: <Text style={styles.searchText}>{text}</Text>
          </Text>
        </View>
      )}

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
  ntBox: {
    paddingBottom: 5,
    borderBottomColor: 'rgba(255,255,255,0.6)',
    borderBottomWidth: 1,
  },
  ntText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
  },
  searchText: {
    fontStyle: 'italic',
    fontSize: 20,
  },
});

export default SearchScreen;
