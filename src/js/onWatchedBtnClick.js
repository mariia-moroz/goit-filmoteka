import renderFilmCard from './renderFilmCard';

const refs = {
  watchedBtn: document.querySelector('.library-button--watched'),
  queueBtn: document.querySelector('.library-button--queue'),
  container: document.querySelector('.movies'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

const watchedFilms = JSON.parse(localStorage.getItem('Watched'));
const queueFilms = JSON.parse(localStorage.getItem('Queue'));

const options = {
  root: refs.container,
  poster_size: 'w342',
  base_url: 'https://image.tmdb.org/t/p/',
  genresList: '',
  movie: '',
};

export default function onWatchedBtnClick() {
  options.root.innerHTML = '';
  if (watchedFilms !== null)
    watchedFilms.forEach(film => {
      options.genresList = film.genres.map(genre => genre.name);
      options.movie = film;

      renderFilmCard(options);
    });
}

function onQueueBtnClick() {
  options.root.innerHTML = '';
  if (queueFilms !== null)
    queueFilms.forEach(film => {
      options.genresList = film.genres.map(genre => genre.name);
      options.movie = film;

      renderFilmCard(options);
    });
}
