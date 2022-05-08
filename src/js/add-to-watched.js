import axios from 'axios';
import createModal from './filmInfoModalCreate';
let dataWatched = [];
const KEY_WATCHED = 'Watched';
const KEY_QUEUE = 'Queue';
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
    // watchedAdd.innerText = 'delete from watched';
    watchedAdd.classList.add('delete');
    console.log(data.id);
    //  перевірка чи є фільм в watched
    const localFilmId = dataWatched.flatMap(dataWatched => dataWatched.id);

    localFilmId.findIndex(e => e === data.id) === -1
      ? (watchedAdd.innerText = 'delete from watched')
      : (watchedAdd.innerText = 'add to watched');

    if (localFilmId.findIndex(e => e === data.id) === -1) {
      dataWatched.push(data);
      localStorage.setItem(KEY_WATCHED, JSON.stringify(dataWatched));
    } else {
      // delete from localstorage
      dataWatched.splice(
        localFilmId.findIndex(e => e === data.id),
        1,
      );
      localStorage.removeItem(KEY_WATCHED);
      localStorage.setItem(KEY_WATCHED, JSON.stringify(dataWatched));
    }
    dataWatched = [];
  }
}
