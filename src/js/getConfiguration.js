//https://api.themoviedb.org/3/configuration?api_key=

const axios = require('axios').default;
const url = 'https://api.themoviedb.org/3/configuration?api_key=306e564986f0782b8ec4bf227b0f3c28';

export default function getConfiguration() {
  const data = axios.get(url);
  return data;
}
