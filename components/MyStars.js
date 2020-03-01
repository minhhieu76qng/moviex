import React from 'react';
import PropType from 'prop-types';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';

const MyStars = ({
  containerStyle,
  percent = 100,
  count = 5,
  starSize = 30,
  half = true,
}) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Stars
        default={(percent / 100) * count}
        count={count}
        half={half}
        starSize={starSize}
        fullStar={<Icon name={'star'} style={[styles.star]} />}
        emptyStar={
          <Icon name={'star-o'} style={[styles.star, styles.emptyStar]} />
        }
        halfStar={<Icon name={'star-half-empty'} style={[styles.star]} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
  },
  star: {
    color: 'yellow',
    backgroundColor: 'transparent',
  },
  emptyStar: {
    color: 'white',
  },
});

MyStars.propTypes = {
  percent: PropType.number,
  count: PropType.number,
  half: PropType.bool,
  containerStyle: PropType.object,
  starSize: PropType.number,
};

export default MyStars;
