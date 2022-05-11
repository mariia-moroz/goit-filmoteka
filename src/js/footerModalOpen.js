const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  bodyScroll: document.querySelector('body'),
  overlay: document.querySelector('.overlay'),
  list: document.querySelector('.team'),
};

refs.openModalBtn.addEventListener('click', openModal);

const array = [...refs.list.children];

function openModal() {
  refs.modal.classList.toggle('footer__backdrop--hidden');
  refs.bodyScroll.classList.toggle('is-open');
  document.addEventListener('keydown', eventKeydown);

  setTimeout(hideOverlay, 1000);
  setTimeout(showBackground, 3000);
  refs.closeModalBtn.addEventListener('click', closeModal);
  array.reduce((acc, item) => {
    acc += 250;
    setTimeout(() => (item.style.opacity = '1'), acc + 500);
    setTimeout(() => item.classList.remove('big'), (acc += 1000));
    return acc;
  }, 1000);
}

function closeModal() {
  refs.modal.classList.toggle('footer__backdrop--hidden');
  refs.bodyScroll.classList.toggle('is-open');

  refs.overlay.style.opacity = '1';
  refs.modal.classList.toggle('modal-bg');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', eventKeydown);
  array.map(item => {
    item.classList.add('big');
    item.style.opacity = '0';
  });
}

function hideOverlay() {
  refs.overlay.style.opacity = '0';
}

function showBackground() {
  refs.modal.classList.toggle('modal-bg');
}

function eventKeydown(event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    refs.modal.classList.toggle('footer__backdrop--hidden');
    refs.bodyScroll.classList.toggle('is-open');
  }
  return;
}
