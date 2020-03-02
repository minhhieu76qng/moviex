import {
  SET_NOWPLAYING,
  SET_FINDING_TEXT,
  SET_FINDING_MOVIES,
  SET_NOWPLAYING_LOADING,
  SET_SEARCH_LOADING,
  SET_TOPRATED_LOADING,
  SET_TOPRATED,
} from '../actions';

const initialState = {
  nowPlaying: {
    movies: [],
    current: 0,
    pages: 0,
    loading: false,
  },
  topRated: {
    movies: [],
    current: 0,
    pages: 0,
    loading: false,
  },
  search: {
    text: null,
    movies: [],
    current: 0,
    pages: 0,
    loading: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NOWPLAYING_LOADING:
      return {
        ...state,
        nowPlaying: {...state.nowPlaying, loading: action.status},
      };
    case SET_NOWPLAYING:
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          movies: action.movies,
          current: action.current,
          pages: action.pages,
        },
      };
    case SET_TOPRATED_LOADING:
      return {
        ...state,
        topRated: {...state.topRated, loading: action.status},
      };
    case SET_TOPRATED:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          movies: action.movies,
          current: action.current,
          pages: action.pages,
        },
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        search: {...state.search, loading: action.status},
      };
    case SET_FINDING_TEXT:
      return {...state, search: {...state.search, text: action.text}};
    case SET_FINDING_MOVIES:
      return {
        ...state,
        search: {
          ...state.search,
          movies: action.movies,
          current: action.current,
          pages: action.pages,
        },
      };
    default:
      return state;
  }
}
