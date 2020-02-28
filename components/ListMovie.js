import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import MovieItem from './MovieItem';

const ListMovie = ({movies, refreshing, onRefresh}) => {
  return (
    <FlatList
      data={movies}
      renderItem={movie => <MovieItem movie={movie} />}
      keyExtractor={item => `${item.id}`}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default ListMovie;
