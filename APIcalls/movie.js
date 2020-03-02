import Axios from 'axios';
import _ from 'lodash';

export async function getMovieDetail(movieId) {
  const response = await Axios.get(`/movie/${movieId}`, {
    params: {
      append_to_response: 'videos',
    },
  });

  if (response && response.data) {
    let data = response.data;

    return {
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      id: data.id,
      original_title: data.original_title,
      overview: data.overview,
      poster_path: data.poster_path,
      release_date: data.release_date,
      runtime: data.runtime,
      title: data.title,
      videos:
        data.videos && _.isArray(data.videos.results)
          ? data.videos.results
          : null,
    };
  }
}
