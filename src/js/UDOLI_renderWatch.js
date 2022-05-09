import renderFilmCard from './renderFilmCard';
import getData from './getData';
import { KEY_QUEUE } from './add-to-watched';
import { KEY_WATCHED } from './add-to-watched';
const dataLocalWatched = JSON.parse(localStorage.getItem(KEY_WATCHED));
console.log(dataLocalWatched);
const btnHederWatch = document.querySelector('.library-button--watched ');
// console.log(btnHederWatch);
btnHederWatch.addEventListener('click', renderWatched);
function renderWatched() {
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
  renderFilms();
  async function renderFilms() {
    //---getting array of films

    //---getting base url to build full url for images
    try {
      const { data } = await getData(options.configUrl + options.key);
      options.base_url = data.images.base_url;
      options.backdrop_sizes = data.images.backdrop_sizes;
    } catch (error) {
      console.error('error is: ', error);
    }
    try {
      const { data } = await getData(options.genresUrl + options.key);
      options.genres = data.genres;
      console.log(options.genres);
    } catch (error) {
      console.error('error is: ', error);
    }
    options.genres = dataLocalWatched.genres;

    renderFilmCardWatch(options);
  }
}
function renderFilmCardWatch({ root, base_url, backdrop_sizes, genres }) {
  root.innerHTML = '';
  dataLocalWatched.forEach(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
    let genre1 = '';
    let genre2 = '';
    for (let item in genres) {
      if (genre_ids[0] === genres[item].id) {
        genre1 = genres[item].name;
      }
    }
    for (let item in genres) {
      if (genre_ids[1] === genres[item].id) {
        genre2 = genres[item].name;
      }
    }
    root.insertAdjacentHTML(
      'beforeend',
      `
    <div class="movie" data-id="${id}">
      <img
        class="movie__cover"
        src="${base_url}${backdrop_sizes[0]}${poster_path}"
        alt="${title}"
      />
      <h2 class="card-preview-info__name">${title}</h2>
      <div class="card-preview-info">
        <p class="card-preview-info__data">${genre1}, ${genre2} | ${parseInt(release_date)}</p>
        <span class="card-preview-info__rating">${vote_average}</span>
      </div>
    </div>`,
    );
  });
}
