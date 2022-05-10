import renderFilmCard from './renderFilmCard';

const refs = {
  watchedBtn: document.querySelector('.library-button--watched'),
  queueBtn: document.querySelector('.library-button--queue'),
  container: document.querySelector('.movies'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

const options = {
  root: refs.container,
  poster_size: 'w342',
  base_url: 'https://image.tmdb.org/t/p/',
  genresList: '',
  movie: '',
};

export function onWatchedBtnClick() {
  clearContainer();
  refs.watchedBtn.classList.add('active-library-button');

  const watchedFilms = JSON.parse(localStorage.getItem('Watched'));

  if (watchedFilms !== null)
    watchedFilms.forEach(film => {
      options.genresList = film.genres.map(genre => genre.name);
      options.movie = film;

      renderFilmCard(options);
    });
}

function onQueueBtnClick() {
  clearContainer();
  refs.watchedBtn.classList.remove('active-library-button');

  const queueFilms = JSON.parse(localStorage.getItem('Queue'));

  if (queueFilms !== null)
    queueFilms.forEach(film => {
      options.genresList = film.genres.map(genre => genre.name);
      options.movie = film;

      renderFilmCard(options);
    });
}

function dynamicLibraryMarkup(e) {
  console.log(e.target.innertext);
}

function clearContainer() {
  options.root.innerHTML = '';
}
