import {connect} from 'react-redux';
import ListMovieScreen from '../screens/ListMovieScreen';
import {refreshTopRated, getMoreTopRated} from '../actions';

const mapStateToProps = state => {
  return {
    loading: state.topRated.loading,
    movies: state.topRated.movies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshScreen: () => {
      dispatch(refreshTopRated());
    },
    loadMore: () => {
      dispatch(getMoreTopRated());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieScreen);
