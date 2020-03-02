import React from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
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

  if (!refreshing && !(movies && movies.length > 0)) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>No films</Text>
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
  wrapper: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default ListMovie;
