import {connect} from 'react-redux';
import SearchScreen from '../screens/SearchScreen';
import {
  findMovies,
  refreshFindingMovies,
  getMoreFindingMovies,
  setFindingMovies,
  setFindingText,
} from '../actions';

const mapStateToProps = state => {
  return {
    movies: state.search.movies,
    loading: state.search.loading,
    text: state.search.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: text => {
      dispatch(findMovies(text));
    },
    refreshScreen: () => {
      dispatch(refreshFindingMovies());
    },
    loadMore: () => {
      dispatch(getMoreFindingMovies());
    },
    reset: () => {
      dispatch(setFindingMovies([], 0, 0));
      dispatch(setFindingText(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
