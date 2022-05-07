const refs = {
  nav: document.querySelector('nav'),
  header: document.querySelector('[data-action="header"]'),
  container: document.querySelector('[data-action="container"]'),
  buttons: document.querySelector('[data-action="library-buttons"]'),
  input: document.querySelector('[data-action="search-field"]'),
  navItems: document.querySelector('.nav__list'),
};

refs.nav.addEventListener('click', appendHomeHeaderMarkup);
refs.nav.addEventListener('click', appendLibraryHeaderMarkup);

function appendHomeHeaderMarkup(e) {
  console.log(e.currentTarget.classList);
  if (
    e.currentTarget.classList === 'logo' ||
    e.target.innerText.toLowerCase() === 'home' ||
    e.target.innerText.toLowerCase() === 'filmoteka'
  ) {
    changeToHomeHeaderMarkup();
  }
}

function appendLibraryHeaderMarkup(e) {
  if (e.target.innerText.toLowerCase() === 'my library') {
    changeToLibraryHeaderMarkup();
  }
}

function changeToLibraryHeaderMarkup() {
  //Подчеркивание елемента
  refs.navItems.lastElementChild.classList.add('nav__item--current');
  refs.navItems.firstElementChild.classList.remove('nav__item--current');
  //Задний фон
  refs.header.classList.add('library-header');
  refs.header.classList.remove('header');
  //Рендерим кнопкиs
  refs.buttons.classList.remove('visually-hidden');
  //Прячем поисковой инпут
  refs.input.classList.add('visually-hidden');
}

function changeToHomeHeaderMarkup() {
  refs.navItems.firstElementChild.classList.add('nav__item--current');
  refs.navItems.lastElementChild.classList.remove('nav__item--current');
  //Задний фон
  refs.header.classList.add('header');
  refs.header.classList.remove('library-header');
  //Прячем кнопки
  refs.buttons.classList.add('visually-hidden');
  //Рендерим поисковой инпут
  refs.input.classList.remove('visually-hidden');
}
