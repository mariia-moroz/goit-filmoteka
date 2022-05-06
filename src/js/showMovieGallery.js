// import './sass/main.scss';
import getPopularFilms from './getPopularFilms';
import renderFilmCard from './renderFilmCard';
import getConfiguration from './getConfiguration';

const options = {
  root: null,
  key: '306e564986f0782b8ec4bf227b0f3c28',
  searchResults: {},
  base_url: 'none',
  poster_size: '',
  backdrop_sizes: [],
};

options.root = document.querySelector('body');

export default function showMovieGallery() {
  renderPopFilms();
  console.log(options.base_url);
}

async function renderPopFilms() {
  let { searchResults, root, base_url } = options;
  //getting array of films
  try {
    const { data } = await getPopularFilms();
    searchResults = data;
    console.log(searchResults);
  } catch (error) {
    console.error('error is: ', error);
  }

  //---getting base url to get images
  try {
    const { data } = await getConfiguration();
    base_url = data.images.base_url;
    console.log('base url', base_url);
  } catch (error) {
    console.error('error is: ', error);
  }
  console.log(options);

  //---rendering every card
  renderFilmCard(root, searchResults);
}
