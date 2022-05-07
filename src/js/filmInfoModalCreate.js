import getData from './getData';
import notiflix from './notiflix';

const refs = {
    movieContainer: document.querySelector('.movies'),
    modal: document.querySelector('.film-info__overlay'),
}

const options = {
  root: null,
  filmId: '',
  key: 'api_key=306e564986f0782b8ec4bf227b0f3c28',
  filmInfo: {},
  img_base_url: 'none',
  poster_size: '',
  backdrop_sizes: [],
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  filmInfoUrl: '',
  configUrl: 'https://api.themoviedb.org/3/configuration?',
};

refs.movieContainer.addEventListener('click', onMovieCardClick);

function onMovieCardClick(e) {
  const movieCard = hasSomeParentTheClass(e.target, 'movie');
  if (!movieCard) {
    return;
  }

  options.root = refs.modal;
  options.filmId = movieCard.dataset.id;
  options.filmInfoUrl = `${options.baseUrl}${options.filmId}?`;
  getFilmInfo();
}

function hasSomeParentTheClass(element, classname) {
    if (element.classList?.contains(classname)) return element;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}

function onCloseButtonClick() {
  options.root.classList.remove('is-open');
  document.body.classList.remove('is-open');
  options.root.innerHTML = '';
}

async function getFilmInfo() {
  notiflix.onLoadingleAdd();

  try {
    const { data } = await getData(options.filmInfoUrl + options.key);
    options.filmInfo = data;
  } catch (error) {
    notiflix.onError();
    console.error('error is: ', error);
  }

  try {
    const { data } = await getData(options.configUrl + options.key);
    options.img_base_url = data.images.secure_base_url;

    createModal(options);

  } catch (error) {
    notiflix.onError();
    console.error('error is: ', error);
  }

  notiflix.onLoadingRemove();
}

function createModal({ filmInfo, img_base_url }) {
  console.log(filmInfo);
  const genres = filmInfo.genres.map(genre => genre.name).join(', ');

  const modal = `
    <div class="film-info__container">
        <div class="film-info__poster">
          <img
            loading="lazy"
            src="${img_base_url}w500${filmInfo.poster_path}"
            srcset="
              ${img_base_url}w500${filmInfo.poster_path}           1x,
              ${img_base_url}w780${filmInfo.poster_path}           2x
            "
            class="film-info__image img"
            alt="${filmInfo.original_title}"
          />
        </div>
        <div class="film-info__text">
          <h2 class="film-info__title">${filmInfo.title}</h2>
          <dl class="film-info__properties list">
            <dt>Vote / Votes</dt>
            <dd>
              <span class="accent">${filmInfo.vote_average}</span>
              <span class="separator">/</span>
              <span class="simple">${filmInfo.vote_count}</span>
            </dd>
            <dt>Popularity</dt>
            <dd>${filmInfo.popularity}</dd>
            <dt>Original Title</dt>
            <dd class="original-title">${filmInfo.original_title}</dd>
            <dt>Genre</dt>
            <dd>${genres}</dd>
          </dl>
          <h3 class="film-info__description-title">About</h3>
          <p class="film-info__description">${filmInfo.overview}</p>
          <div class="film-info__buttons">
            <button class="film-info__button film-info__button--accent">add to watched</button>
            <button class="film-info__button film-info__button--simple">add to queue</button>
          </div>
        </div>
        <button type="button" class="film-info__close-button">
          <svg class="film-info__close-icon" width="30" height="30">
            <use href="./images/sprite.svg#close"></use>
          </svg>
        </button>
    </div>
    `;

  options.root.innerHTML = modal;

  const closeButton = options.root.querySelector('.film-info__close-button');

  options.root.classList.add('is-open');
  document.body.classList.add('is-open');
  closeButton.addEventListener('click', onCloseButtonClick);
}