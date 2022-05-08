const checkbox = document.getElementById('checkbox');

const body = document.querySelector('body');
const footer = document.querySelector('footer');
const footerText = document.querySelector('.footer_text');
const filmInfo = document.querySelector('.film-info__overlay');

checkbox.addEventListener('change', onDarkTheme);

function onDarkTheme() {
  body.classList.toggle('dark');
  footer.classList.toggle('dark');
  footerText.classList.toggle('dark');
  filmInfo.classList.toggle('dark-modal');
}