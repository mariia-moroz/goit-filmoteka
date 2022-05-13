const checkbox = document.getElementById('checkbox');

const body = document.querySelector('body');
const footer = document.querySelector('footer');
const footerText = document.querySelector('.footer_text');
const filmInfo = document.querySelector('.film-info__overlay');
const switcher = document.querySelector('.switcher');

checkbox.addEventListener('change', onDarkTheme);

function onDarkTheme() {
  body.classList.toggle('dark');
  footer.classList.toggle('dark');
  footerText.classList.toggle('dark');
  filmInfo.classList.toggle('dark-modal');
}

export function showSwitcher() {
  switcher.classList.remove('visually-hidden');
}

export function hideSwitcher() {
  switcher.classList.add('visually-hidden');
}

// navLib.addEventListener('click', () => {
//   if (navLib) {
//     switcher.classList.add('visually-hidden');
//   }
// });

// home.addEventListener('click', () => {
//   if (home) {
//     switcher.classList.remove('visually-hidden');
//   }
// });
