const refs = {
  logo: document.querySelector('.logo'),
  navItems: document.querySelector('.nav__list'),
  header: document.querySelector('[data-action="header"]'),
  container: document.querySelector('[data-action="container"]'),
  buttons: document.querySelector('[data-action="library-buttons"]'),
  input: document.querySelector('[data-action="search-field"]'),
};

refs.navItems.addEventListener('click', onNavItemClick);
refs.logo.addEventListener('click', onLogoClick);

function onNavItemClick(e) {
  if (e.target.innerText !== undefined && e.target.innerText.toLowerCase() === 'home') {
    changeToHomeHeaderMarkup();
  } else if (
    e.target.innerText !== undefined &&
    e.target.innerText.toLowerCase() === 'my library'
  ) {
    changeToLibraryHeaderMarkup();
  }
}

function onLogoClick(e) {
  console.log(e.currentTarget.classList.contains('logo'));
  if (e.currentTarget.className !== undefined && e.currentTarget.className === 'logo') {
    changeToHomeHeaderMarkup();
  }
}

function changeToLibraryHeaderMarkup() {
  //Подчеркивание елемента
  refs.navItems.lastElementChild.classList.add('nav__item--current');
  refs.navItems.firstElementChild.classList.remove('nav__item--current');
  //Задний фон

  refs.header.classList.remove('header-home');
  refs.header.classList.add('library-header');
  //Рендерим кнопки
  refs.buttons.classList.remove('visually-hidden');
  //Прячем поисковой инпут
  refs.input.classList.add('visually-hidden');
}

function changeToHomeHeaderMarkup() {
  refs.navItems.firstElementChild.classList.add('nav__item--current');
  refs.navItems.lastElementChild.classList.remove('nav__item--current');
  //Задний фон
  refs.header.classList.remove('library-header');
  refs.header.classList.add('header-home');

  //Прячем кнопки
  refs.buttons.classList.add('visually-hidden');
  //Рендерим поисковой инпут
  refs.input.classList.remove('visually-hidden');
}
