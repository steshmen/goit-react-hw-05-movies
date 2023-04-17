import axios from 'axios';

const API_KEY = '0d7d20afff25839c3a8a445daa632bca';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
  const resp = await axios(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data;
};

const getMoviesBySearch = async search => {
  const resp = await axios(
    `/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&include_adult=false&page=1`);
  return resp.data;
};

const getMovieById = async id => {
  const resp = await axios(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return resp.data;
};

const getMovieReviews = async id => {
  const resp = await axios(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return resp.data;
}

const getMovieCast = async id => {
  const resp = await axios(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return resp.data;
}

const featchApi = {
  getMovieById,
  getTrendingMovies,
  getMoviesBySearch,
  getMovieCast,
  getMovieReviews
};

export default featchApi;
