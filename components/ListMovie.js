import React from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import MovieItem from './MovieItem';

const ListMovie = ({movies, refreshing, onRefresh, loadMore}) => {
  if (refreshing && !(movies && movies.length > 0)) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      renderItem={movie => <MovieItem movie={movie} />}
      keyExtractor={item => `${item.id}`}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={4}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ListMovie;
