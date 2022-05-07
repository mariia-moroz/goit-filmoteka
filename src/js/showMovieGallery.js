// import './sass/main.scss';
import renderFilmCard from './renderFilmCard';
import getData from './getData';

const options = {
  root: null,
  key: 'api_key=306e564986f0782b8ec4bf227b0f3c28',
  searchResults: {},
  base_url: 'none',
  poster_size: '',
  backdrop_sizes: [],
  genres: [],
  popularFilmsUrl: 'https://api.themoviedb.org/3/trending/movie/week?',
  configUrl: 'https://api.themoviedb.org/3/configuration?',
  genresUrl: 'https://api.themoviedb.org/3/genre/movie/list?',
};

options.root = document.querySelector('.movies');

export default function showMovieGallery() {
  renderPopFilms();
}

async function renderPopFilms() {
  //---getting array of films
  try {
    const { data } = await getData(options.popularFilmsUrl + options.key);
    options.searchResults = data;
  } catch (error) {
    console.error('error is: ', error);
  }

  //---getting base url to build full url for images
  try {
    const { data } = await getData(options.configUrl + options.key);
    options.base_url = data.images.base_url;
    options.backdrop_sizes = data.images.backdrop_sizes;
  } catch (error) {
    console.error('error is: ', error);
  }

  //---getting array of genres
  try {
    const { data } = await getData(options.genresUrl + options.key);
    options.genres = data.genres;
    console.log(options.genres);
  } catch (error) {
    console.error('error is: ', error);
  }

  console.log(options);

  //---rendering every card
  renderFilmCard(options);
}
