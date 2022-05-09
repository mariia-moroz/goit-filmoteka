import './sass/main.scss';
import showMovieGallery from './js/showMovieGallery';
import './js/headerMarkup';
import './js/fetch-by-name';
import './js/filmInfoModalCreate';
import './js/footerModalOpen';
import './js/add-to-watched';
import './js/pagination'
import '@fortawesome/fontawesome-free/js/all.js';
import './js/theme-switcher';
import pagination from "./js/pagination";
showMovieGallery();

pagination.on('afterMove', (event) => {
  console.log(event)
  const currentPage = event.page;
  localStorage.setItem("pagination-page", JSON.stringify(currentPage))
  showMovieGallery();
});
