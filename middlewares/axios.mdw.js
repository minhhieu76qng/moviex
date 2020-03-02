import Axios from 'axios';
import {BASE_API_URL, MOVIE_DB_API_KEY} from 'react-native-dotenv';

Axios.interceptors.request.use(
  config => {
    config.baseURL = BASE_API_URL;
    config.params = {
      api_key: MOVIE_DB_API_KEY,
    };
    return config;
  },
  err => Promise.reject(err),
);
