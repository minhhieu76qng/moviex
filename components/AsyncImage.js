import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AsyncImage = ({source, width}) => {
  const [loaded, setLoaded] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const [imageOpacity, setImageOpacity] = useState(new Animated.Value(0.0));
  const [placeholderOpacity, setPlaceholderOpacity] = useState(
    new Animated.Value(1.0),
  );
  const [placeholderScale, setPlaceholderScale] = useState(
    new Animated.Value(0.0),
  );

  const onLoad = () => {
    console.log('fetch');
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
          delay: 200,
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
        console.log(err);
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

  const wrapperStyle = {
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
      {!loaded && (
        <Animated.View style={wrapperStyle}>
          <Icon style={styles.placeholder} name="film" color="#fff" />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    width: '100%',
  },
  placeholder: {
    fontSize: 80,
  },
});

export default AsyncImage;
