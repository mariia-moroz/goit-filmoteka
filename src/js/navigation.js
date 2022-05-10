import { changeToHomeHeaderMarkup } from './headerMarkup';
import { changeToLibraryHeaderMarkup } from './headerMarkup';
import { onWatchedBtnClick } from './libraryButtons';
import renderPopFilms from './showMovieGallery';

const refs = {
  logo: document.querySelector('.logo'),
  navItems: document.querySelector('.nav__list'),
  container: document.querySelector('.movies'),
};

refs.navItems.addEventListener('click', onNavItemClick);
refs.logo.addEventListener('click', onLogoClick);

function onNavItemClick(e) {
  if (e.target.innerText !== undefined && e.target.innerText.toLowerCase() === 'home') {
    changeToHomeHeaderMarkup();
    clearContainer();
    renderPopFilms();
  } else if (
    e.target.innerText !== undefined &&
    e.target.innerText.toLowerCase() === 'my library'
  ) {
    changeToLibraryHeaderMarkup();
    clearContainer();
    onWatchedBtnClick();
  }
}

function onLogoClick(e) {
  if (e.currentTarget.className !== undefined && e.currentTarget.className === 'logo') {
    renderPopFilms();
    clearContainer();
    changeToHomeHeaderMarkup();
  }
}

function clearContainer() {
  if (refs.container.innerHTML !== '') {
    refs.container.innerHTML = '';
  }
}
