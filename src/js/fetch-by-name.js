import axios from 'axios';

let filmToFind;

const refs = {
  btnSrch: document.querySelector('.search-field__btn'),
  inpSrch: document.querySelector('.search-field__input'),
  container: document.querySelector('.movies'),
};
refs.btnSrch.addEventListener('click', onBtn);
refs.inpSrch.addEventListener('input', onInput);
function onInput(event) {
  filmToFind = event.currentTarget.value.trim();
  return filmToFind;
}

async function onBtn(event) {
  event.preventDefault();
  const movies = await fetchSearch(filmToFind);
}

async function fetchSearch(filmToFind) {
  const API_KEY = '306e564986f0782b8ec4bf227b0f3c28';
  const BASE_URL = 'https://api.themoviedb.org';
  const SEARCH_URL = '/3/search/movie';

  const url = `${BASE_URL}${SEARCH_URL}?api_key=${API_KEY}&include_adult=false&query=${filmToFind}`;

  const response = await axios.get(url);
  const movies = response.data;
  return movies;
}
