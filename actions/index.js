import Axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const SET_NOWPLAYING = 'SET_NOWPLAYING';
export const SET_TOPRATED = 'SET_TOPRATED';
export const SET_DETAIL = 'SET_DETAIL';

function setLoading(status) {
  return {type: SET_LOADING, status};
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
    dispatch(setLoading(true));
    dispatch(setNowPlaying([], 0, 0));

    try {
      const result = await loadNowPlaying(1);

      dispatch(setNowPlaying(result.movies, result.current, result.pages));
      dispatch(setLoading(false));
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
        dispatch(setLoading(true));

        const result = await loadNowPlaying(current + 1);
        dispatch(
          setNowPlaying(
            movies.concat(result.movies),
            result.current,
            result.pages,
          ),
        );
        dispatch(setLoading(false));
      }
    } catch (err) {
      throw err;
    }
  };
}
