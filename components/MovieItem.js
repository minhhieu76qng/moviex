import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BASE_IMG_URL} from 'react-native-dotenv';
import ScreenName from '../constance/ScreenName';
import AsyncImage from './AsyncImage';

const MovieItem = React.memo(
  ({movie}) => {
    const navigation = useNavigation();
    const route = useRoute();

    function gotoDetail() {
      navigation.navigate(ScreenName.Detail, {
        movieId: movie.item.id,
        stack: {
          from: route.name,
        },
      });
    }

    return (
      <TouchableOpacity onPress={() => gotoDetail()}>
        <View style={styles.movieItem}>
          <View style={styles.moviePoster}>
            <AsyncImage
              width={100}
              source={{uri: `${BASE_IMG_URL}/w92${movie.item.poster_path}`}}
            />
          </View>
          <View style={styles.movieContent}>
            <Text style={[styles.textColor, styles.movieName]}>
              {movie.item.title}
            </Text>
            <Text style={[styles.textColor, styles.releaseDate]}>
              {movie.item.release_date}
            </Text>
            <Text
              style={[styles.textColor, styles.movieDescription]}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {movie.item.overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.movie.item.id === nextProps.movie.item.id) {
      return true;
    }
    return false;
  },
);

const styles = StyleSheet.create({
  movieItem: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  moviePoster: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    padding: 3,
    height: 150,
    overflow: 'hidden',
  },
  movieContent: {
    marginLeft: 20,
    color: '#fff',
    flex: 1,
  },
  textColor: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
  },
  movieName: {
    fontSize: 19,
    fontWeight: '700',
  },
  releaseDate: {
    fontStyle: 'italic',
    fontSize: 13,
  },
  movieDescription: {
    marginTop: 7,
  },
  movieThumbnail: {
    backgroundColor: '#ececec',
    flex: 1,
    height: 150,
    maxHeight: 150,
  },
});

export default MovieItem;
