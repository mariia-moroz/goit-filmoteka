import createHomeHeaderMarkup from './homeHeaderMarkup';

const refs = {
  nav: document.querySelector('nav'),
  header: document.querySelector('header'),
};

refs.nav.addEventListener('click', appendHomeHeaderMarkup);

function appendHomeHeaderMarkup(e) {
  console.dir(e.target);
  if (
    e.target.innerText.toLowerCase() === 'home' ||
    e.target.innerText.toLowerCase() === 'filmoteka'
  ) {
    refs.header.innerHTML = createHomeHeaderMarkup();
  }
}
console.dir(refs.nav.classList);
