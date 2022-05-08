const refs = {
  movieContainer: document.querySelector('.movies'),
  modal: document.querySelector('.film-info'),
};

const API_KEY = '306e564986f0782b8ec4bf227b0f3c28';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
var filmId = '';

refs.movieContainer.addEventListener('click', onMovieCardClick);

function onMovieCardClick(e) {
  const movieCard = hasSomeParentTheClass(e.target, 'movie');
  if (!movieCard) {
    return;
  }
  filmId = movieCard.dataset.id;
  createModal();
}

function hasSomeParentTheClass(element, classname) {
  if (element.classList?.contains(classname)) return element;
  return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}

function onCloseButtonClick() {
  const overlay = refs.modal.querySelector('.film-info__overlay');
  overlay.classList.remove('is-open');
  refs.modal.innerHTML = '';
}

async function getFilmInfo() {
  const response = await fetch(`${BASE_URL}/${filmId}?api_key=${API_KEY}`);
  return response.json();
}

async function createModal() {
  const filmInfo = await getFilmInfo();
  console.log(filmInfo);
  const genres = filmInfo.genres.map(genre => genre.name).join(', ');

  const modal = `
<div class="film-info__overlay">
    <div class="film-info__container">
        <div class="film-info__poster">
          <img
            loading="lazy"
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${filmInfo.poster_path}"
            srcset="
              https://www.themoviedb.org/t/p/w600_and_h900_bestv2${filmInfo.poster_path} 1x,
              https://www.themoviedb.org/t/p/w1280${filmInfo.poster_path}                2x
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
</div>
    `;

  refs.modal.innerHTML = modal;

  const overlay = refs.modal.querySelector('.film-info__overlay');
  const closeButton = refs.modal.querySelector('.film-info__close-button');

  overlay.classList.add('is-open');
  closeButton.addEventListener('click', onCloseButtonClick);
}
