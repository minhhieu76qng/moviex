import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {BASE_IMG_URL} from 'react-native-dotenv';

const MovieItem = ({movie}) => {
  return (
    <View style={styles.movieItem}>
      <View style={styles.moviePoster}>
        <Image
          style={styles.movieThumbnail}
          source={{uri: `${BASE_IMG_URL}/w92${movie.item.poster_path}`}}
          resizeMode="cover"
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
  );
};

const styles = StyleSheet.create({
  movieItem: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // minHeight: 150,
    padding: 15,
    flexDirection: 'row',
  },
  moviePoster: {
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    padding: 3,
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
