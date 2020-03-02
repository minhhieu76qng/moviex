import {SET_LOADING, SET_NOWPLAYING} from '../actions';

const initialState = {
  nowPlaying: {
    movies: [],
    current: 0,
    pages: 0,
  },
  topRated: {
    movies: [],
    current: 1,
    pages: 1,
  },
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.status};
    case SET_NOWPLAYING:
      return {
        ...state,
        nowPlaying: {
          movies: action.movies,
          current: action.current,
          pages: action.pages,
        },
      };
    default:
      return state;
  }
}
