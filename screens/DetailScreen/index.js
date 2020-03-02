import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import moment from 'moment';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncImage from '../../components/AsyncImage';
import MyStars from '../../components/MyStars';
import {BASE_VIDEO_URL, BASE_IMG_URL} from 'react-native-dotenv';
import {getMovieDetail} from '../../APIcalls/movie';

const MovieDetail = ({route}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async function() {
      setLoading(true);

      const ret = await getMovieDetail(route.params.movieId);

      setMovie(ret);
      setLoading(false);
    })();
  }, [route.params.movieId]);

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

  const youtubeVideoSection = video => {
    if (
      !(video && _.isObject(video) && video.key && video.site === 'YouTube')
    ) {
      return null;
    }
    return (
      <View style={[styles.bodySection]}>
        <WebView
          mediaPlaybackRequiresUserAction={true}
          source={{
            uri: `${BASE_VIDEO_URL}/${video.key}`,
          }}
          style={styles.videoFrame}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingFilm}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!loading && !movie) {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri: `${BASE_IMG_URL}/w92${movie.backdrop_path}`,
      }}
      style={styles.imgBackground}
      blurRadius={10}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.overlay, styles.movieDetail]}>
          <View style={styles.head}>
            <View style={styles.posterImage}>
              <AsyncImage
                width={150}
                source={{
                  uri: `${BASE_IMG_URL}/original${movie.poster_path}`,
                }}
                placeholderSource={{
                  uri: `${BASE_IMG_URL}/w92${movie.poster_path}`,
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
                percent={(movie.vote_average / 10) * 100}
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
            {movie.videos &&
              _.isArray(movie.videos) &&
              movie.videos.length > 0 &&
              youtubeVideoSection(movie.videos[0])}
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
  loadingFilm: {
    backgroundColor: '#3d3d3d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3d3d3d',
  },
  scrollView: {
    width: '100%',
    minHeight: '100%',
  },
  movieDetail: {
    // flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  overlay: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
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
  videoFrame: {
    marginTop: 20,
    width: '100%',
    height: 250,
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

export default MovieDetail;
