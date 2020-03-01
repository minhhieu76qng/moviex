import React, {useState, useEffect} from 'react';
import PropType from 'prop-types';
import {View, Image, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AsyncImage = ({source, placeholderSource, width}) => {
  const [loaded, setLoaded] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const [imageOpacity, setImageOpacity] = useState(
    placeholderSource ? new Animated.Value(1.0) : new Animated.Value(0.0),
  );
  const [placeholderOpacity, setPlaceholderOpacity] = useState(
    new Animated.Value(1.0),
  );
  const [placeholderScale, setPlaceholderScale] = useState(
    new Animated.Value(1.0),
  );

  const onLoad = () => {
    Animated.sequence([
      //
      // Implode
      //
      Animated.parallel([
        Animated.timing(placeholderScale, {
          toValue: 0.7,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(placeholderOpacity, {
          toValue: 0.66,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      //
      // Explode
      //
      Animated.parallel([
        Animated.parallel([
          Animated.timing(placeholderOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(placeholderScale, {
            toValue: 1.2,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(imageOpacity, {
          toValue: 1.0,
          delay: 300,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setLoaded(true);
    });
  };

  useEffect(() => {
    Image.getSize(
      source.uri,
      (w, h) => {
        setImgWidth(width);
        setImgHeight((width / w) * h);
      },
      err => {
        throw err;
      },
    );
  }, [source.uri, width]);

  const imgStyle = {
    position: loaded ? 'relative' : 'absolute',
    resizeMode: 'cover',
    opacity: imageOpacity,
    width: imgWidth,
    height: imgHeight,
  };

  const phImageStyle = {
    resizeMode: 'cover',
    opacity: placeholderOpacity,
    width: imgWidth,
    height: imgHeight,
  };

  const placeholderStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    transform: [{scale: placeholderScale}],
    opacity: placeholderOpacity,
    width: imgWidth,
    height: imgHeight,
  };

  return (
    <View style={styles.imageWrapper}>
      <Animated.Image style={imgStyle} source={source} onLoad={onLoad} />
      {!placeholderSource && !loaded && (
        <Animated.View style={placeholderStyle}>
          <Icon style={styles.icon} name="film" color="#fff" />
          {/* <ActivityIndicator size="large" /> */}
        </Animated.View>
      )}

      {placeholderSource && !loaded && (
        <Animated.Image
          blurRadius={20}
          style={phImageStyle}
          source={placeholderSource}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    width: '100%',
  },
  icon: {
    fontSize: 80,
  },
});

AsyncImage.propTypes = {
  width: PropType.number,
  source: PropType.object,
  placeholderSource: PropType.object,
};

export default AsyncImage;
