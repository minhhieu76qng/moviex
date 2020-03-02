import Axios from 'axios';

export const SET_NOWPLAYING_LOADING = 'SET_NOWPLAYING_LOADING';
export const SET_TOPRATED_LOADING = 'SET_TOPRATED_LOADING';
export const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING';
export const SET_NOWPLAYING = 'SET_NOWPLAYING';
export const SET_TOPRATED = 'SET_TOPRATED';

export const SET_FINDING_TEXT = 'SET_SEARCH_TEXT';
export const SET_FINDING_MOVIES = 'SET_FINDING_MOVIES';

// --------------------- NOW_PLAYING ---------------

function setNowPlayingLoading(status) {
  return {type: SET_NOWPLAYING_LOADING, status};
}

function setNowPlaying(movies, current, pages) {
  return {type: SET_NOWPLAYING, movies, current, pages};
}

async function loadNowPlaying(page) {
  const response = await Axios.get('/movie/now_playing', {
    params: {
      page,
    },
  });

  if (!(response && response.data)) {
    return null;
  }

  return {
    movies: response.data.results,
    current: response.data.page,
    pages: response.data.total_pages,
  };
}

export function refreshNowPlaying() {
  return async dispatch => {
    dispatch(setNowPlayingLoading(true));
    dispatch(setNowPlaying([], 0, 0));

    try {
      const result = await loadNowPlaying(1);

      dispatch(setNowPlaying(result.movies, result.current, result.pages));
      dispatch(setNowPlayingLoading(false));
    } catch (err) {
      throw err;
    }
  };
}

export function getMoreNowPlaying() {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      if (!state) {
        return;
      }

      const {current, pages, movies} = state.nowPlaying;

      if (current > 0 && current < pages) {
        dispatch(setNowPlayingLoading(true));

        const result = await loadNowPlaying(current + 1);
        dispatch(
          setNowPlaying(
            movies.concat(result.movies),
            result.current,
            result.pages,
          ),
        );
        dispatch(setNowPlayingLoading(false));
      }
    } catch (err) {
      throw err;
    }
  };
}

// --------------------- SEARCHING ----------------
function setSearchLoading(status) {
  return {type: SET_SEARCH_LOADING, status};
}

export function setFindingText(text) {
  return {type: SET_FINDING_TEXT, text};
}

export function setFindingMovies(movies, current, pages) {
  return {type: SET_FINDING_MOVIES, movies, current, pages};
}

async function getFindingMovies(text, page) {
  const response = await Axios.get('/search/movie', {
    params: {query: text, page},
  });

  if (!(response && response.data)) {
    return null;
  }

  return {
    movies: response.data.results,
    current: response.data.page,
    pages: response.data.total_pages,
  };
}

export function refreshFindingMovies() {
  return async (dispatch, getState) => {
    const state = getState();

    if (!state) {
      return;
    }

    if (!state.search.text) {
      return;
    }

    dispatch(setSearchLoading(true));
    dispatch(setFindingMovies([], 0, 0));

    try {
      const result = await getFindingMovies(state.search.text, 1);
      dispatch(setFindingMovies(result.movies, result.current, result.pages));
      dispatch(setSearchLoading(false));
    } catch (err) {
      throw err;
    }
  };
}

export function findMovies(text) {
  return async dispatch => {
    dispatch(setFindingText(text));

    dispatch(setSearchLoading(true));
    dispatch(setFindingMovies([], 0, 0));

    try {
      const result = await getFindingMovies(text, 1);
      dispatch(setFindingMovies(result.movies, result.current, result.pages));
      dispatch(setSearchLoading(false));
    } catch (err) {
      throw err;
    }
  };
}

export function getMoreFindingMovies() {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      if (!state) {
        return;
      }

      const {current, pages, movies, text} = state.search;

      if (current > 0 && current < pages) {
        dispatch(setSearchLoading(true));

        const result = await getFindingMovies(text, current + 1);
        dispatch(
          setNowPlaying(
            movies.concat(result.movies),
            result.current,
            result.pages,
          ),
        );
        dispatch(setSearchLoading(false));
      }
    } catch (err) {
      throw err;
    }
  };
}
