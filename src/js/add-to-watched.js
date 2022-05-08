import axios from 'axios';
import createModal from './filmInfoModalCreate';
let dataWatched = [];
const KEY_WATCHED = 'Watched';
// export function addToLocalStore(id) {
//   const watchedAdd = document.querySelector('.film-info__button--watched');
//   console.log(watchedAdd);
//   watchedAdd.addEventListener('click', onClickWatched);
//   function onClickWatched() {
//     dataWatched.push(id);
//     localStorage.setItem(KEY_WATCHED, JSON.stringify(dataWatched));
//   }
// }
// async function fetchId(filmId) {
//   const API_KEY = '306e564986f0782b8ec4bf227b0f3c28';
//   const BASE_URL = 'https://api.themoviedb.org';
//   const SEARCH_URL = `/3/search/movie/${filmId}`;

//   const url = `${BASE_URL}${SEARCH_URL}?api_key=${API_KEY}`;

//   const response = await axios.get(url);
//   const movies = response.data;
//   console.log(movies);
//   return movies;
// }

export function addToLocalStore(data) {
  const watchedAdd = document.querySelector('.film-info__button--watched');
  watchedAdd.addEventListener('click', onClickWatched);
  function onClickWatched() {
    if (localStorage[KEY_WATCHED] !== undefined) {
      dataWatched = JSON.parse(localStorage[KEY_WATCHED]);
    }

    console.log(data.id);
    //  перевірка чи є фільм в watched
    const localFilmId = dataWatched.flatMap(dataWatched => dataWatched.id);
    console.log(localFilmId);
    // console.log(localFilmId.findIndex(e => e === data.id));
    // const dls=...dataWatched
    if (localFilmId.findIndex(e => e === data.id) === -1) {
      dataWatched.push(data);
      localStorage.setItem(KEY_WATCHED, JSON.stringify(dataWatched));
      dataWatched = [];
    }
    // console.log(dataWatched.length);
  }
}

// -----------render fillmCard

// const buttonWatchedMarkup = document.querySelector('.library-button--watched');

// const lS = JSON.parse(localStorage.getItem(KEY_WATCHED));
// // console.log(lS);
// buttonWatchedMarkup.addEventListener('click', renderFilmCardWatched(lS));
// function renderFilmCardWatched(go) {
//   const markup = go;
//   markup.forEach(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
//     let genre1 = '';
//     let genre2 = '';
//     for (let item in genres) {
//       if (genre_ids[0] === genres[item].id) {
//         genre1 = genres[item].name;
//       }
//     }
//     for (let item in genres) {
//       if (genre_ids[1] === genres[item].id) {
//         genre2 = genres[item].name;
//       }
//     }
//     const conteinerMovie = document.querySelector('.movies');
//     conteinerMovie.insertAdjacentHTML(
//       'beforeend',
//       `
//     <div class="movie" data-id="${id}">
//       <img
//         class="movie__cover"
//         src="${poster_path}"
//         alt="${title}"
//       />
//       <h2 class="card-preview-info__name">${title}</h2>
//       <div class="card-preview-info">
//         <p class="card-preview-info__data"> | ${parseInt(release_date)}</p>
//         <span class="card-preview-info__rating">${vote_average}</span>
//       </div>
//     </div>`,
//     );
//   });
// }
