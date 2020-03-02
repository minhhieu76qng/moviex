import {connect} from 'react-redux';
import {refreshNowPlaying, getMoreNowPlaying} from '../actions';
import NowPlaying from '../screens/NowPlaying';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    movies: state.nowPlaying.movies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshNowPlaying: () => {
      dispatch(refreshNowPlaying());
    },
    getMoreNowPlaying: () => {
      dispatch(getMoreNowPlaying());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
