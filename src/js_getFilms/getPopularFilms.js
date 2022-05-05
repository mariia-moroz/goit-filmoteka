//key: 306e564986f0782b8ec4bf227b0f3c28
//https://api.themoviedb.org/3/trending/movie/week?api_key=306e564986f0782b8ec4bf227b0f3c28

const axios = require('axios').default;
const url =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=306e564986f0782b8ec4bf227b0f3c28';

export default async function getPopularFilms() {
  let searchResults = {};
  console.log('start getting films');
  try {
    const { data } = await axios.get(url);
    // const data = await response.json();
    searchResults = data;
    console.log(data);
  } catch (error) {
    console.error('error is: ', error);
  }
  return searchResults;
}
