//key: 306e564986f0782b8ec4bf227b0f3c28
//https://api.themoviedb.org/3/trending/movie/week?api_key=306e564986f0782b8ec4bf227b0f3c28
const axios = require('axios').default;
const url =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=306e564986f0782b8ec4bf227b0f3c28';

export default function getPopularFilms() {
  const data = axios.get(url);
  return data;
}
