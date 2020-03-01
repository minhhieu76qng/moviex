import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import moment from 'moment';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncImage from '../../components/AsyncImage';
import MyStars from '../../components/MyStars';
import {BASE_VIDEO_URL} from 'react-native-dotenv';

const MovieDetail = () => {
  const genresSection = () => {
    if (movie.genres && _.isArray(movie.genres) && movie.genres.length > 0) {
      return (
        <Text style={styles.textColor}>
          <Text style={styles.title}>Genres:</Text> {movie.genres[0].name}
        </Text>
      );
    }
  };

  const movieTitleSection = () => {
    return (
      <Text style={[styles.movieName, styles.textColor]}>
        {`${movie.title}`}
        <Text style={{fontSize: 22}}>{` (${moment(
          movie.release_date,
        ).year()})`}</Text>
      </Text>
    );
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://image.tmdb.org/t/p/w92/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
      }}
      style={styles.imgBackground}
      blurRadius={20}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.overlay, styles.movieDetail]}>
          <View style={styles.head}>
            <View style={styles.posterImage}>
              <AsyncImage
                width={150}
                source={{
                  uri:
                    'https://image.tmdb.org/t/p/original/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
                }}
                placeholderSource={{
                  uri:
                    'https://image.tmdb.org/t/p/w92/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
                }}
              />
            </View>

            <View style={styles.headDetail}>
              {genresSection()}
              <Text style={styles.textColor}>
                <Text style={styles.title}>Runtime:</Text>{' '}
                {`${movie.runtime} minutes`}
              </Text>
              <Text style={styles.textColor}>
                <Text style={styles.title}>Release date:</Text>{' '}
                {moment(movie.release_date).format('LL')}
              </Text>
              <MyStars
                containerStyle={styles.rating}
                percent={30}
                starSize={70}
              />
            </View>
          </View>

          <View style={styles.movieNameSection}>
            {movieTitleSection()}
            <View style={styles.favoriteBox}>
              <Icon style={styles.favoriteIcon} name="heart" size={35} />
            </View>
          </View>
          <View style={styles.body}>
            <View style={[styles.bodySection]}>
              <WebView
                mediaPlaybackRequiresUserAction={true}
                source={{
                  uri: 'https://www.youtube.com/embed/uXvdoj3wvbM',
                }}
                style={{marginTop: 20, width: '100%', height: 250}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            </View>
            <View style={styles.bodySection}>
              <Text style={[styles.textColor, styles.title, styles.bodyTitle]}>
                Overview
              </Text>
              <Text style={[styles.text, styles.textColor]}>
                {movie.overview}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    width: '100%',
    // height: '100%',
  },
  movieDetail: {
    // flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  head: {
    flexDirection: 'row',
    width: '100%',
  },
  posterImage: {},
  headDetail: {
    flex: 1,
    marginLeft: 20,
  },
  movieNameSection: {
    flexDirection: 'row',
    paddingTop: 20,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  favoriteBox: {
    width: '10%',
    minWidth: 50,
  },
  favoriteIcon: {
    color: 'grey',
  },
  movieName: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 20,
  },
  body: {
    // marginTop: 10,
  },
  bodySection: {
    marginTop: 25,
    width: '100%',
    flexDirection: 'column',
  },
  bodyTitle: {
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  textColor: {
    color: '#fff',
  },
  rating: {
    marginTop: 15,
  },
});

const movie = {
  adult: false,
  backdrop_path: '/szytSpLAyBh3ULei3x663mAv5ZT.jpg',
  belongs_to_collection: null,
  budget: 175000000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 10751,
      name: 'Family',
    },
  ],
  homepage: 'http://movies.disney.com/inside-out',
  id: 150540,
  imdb_id: 'tt2096673',
  original_language: 'en',
  original_title: 'Inside Out',
  overview:
    "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
  popularity: 28.665,
  poster_path: '/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
  production_companies: [
    {
      id: 3,
      logo_path: '/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png',
      name: 'Pixar',
      origin_country: 'US',
    },
    {
      id: 2,
      logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
      name: 'Walt Disney Pictures',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2015-06-09',
  revenue: 857611174,
  runtime: 95,
  spoken_languages: [
    {
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'Meet the little voices inside your head.',
  title: 'Inside Out',
  video: false,
  vote_average: 7.9,
  vote_count: 14154,
  videos: {
    results: [
      {
        id: '571f2fa39251417e8a001b3f',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'yRUAzGQ3nSY',
        name: 'Inside Out - Official US Trailer',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
      {
        id: '571f2fffc3a3683393002ca1',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: '1HFv47QHWJU',
        name: 'Inside Out - Official US Trailer 2',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
      {
        id: '543391a80e0a265834006c5a',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: '1t0A_tZGrYw',
        name: 'Inside Out US Teaser Trailer',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
      },
      {
        id: '54a954299251414d5d004843',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: '_MC3XuMvsDI',
        name: 'INSIDE OUT | Trailer 2 - UK | Official Disney UK',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
      {
        id: '571f302f92514142e2002023',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'Yr3tv1hW1gg',
        name: 'INSIDE OUT | New UK Trailer | Official Disney UK',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
      },
      {
        id: '571f309dc3a36856a7000b46',
        iso_639_1: 'en',
        iso_3166_1: 'US',
        key: 'k1oXx4delIY',
        name: '"Disgust & Anger" Clip - Inside Out',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
      },
    ],
  },
};

export default MovieDetail;
