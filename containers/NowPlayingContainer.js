import {connect} from 'react-redux';
import {refreshNowPlaying, getMoreNowPlaying} from '../actions';
import NowPlaying from '../screens/NowPlaying';

const mapStateToProps = state => {
  return {
    loading: state.nowPlaying.loading,
    movies: state.nowPlaying.movies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshScreen: () => {
      dispatch(refreshNowPlaying());
    },
    loadMore: () => {
      dispatch(getMoreNowPlaying());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
