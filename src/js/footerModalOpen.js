const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  bodyScroll: document.querySelector('body'),
  overlay: document.querySelector('.overlay'),
};

refs.openModalBtn.addEventListener('click', openModal);

function openModal() {
  refs.modal.classList.toggle('footer__backdrop--hidden');
  refs.bodyScroll.classList.toggle('is-open');
  document.addEventListener('keydown', eventKeydown);
  setTimeout(hideOverlay, 1500);
  setTimeout(showBackground, 3000);
  refs.closeModalBtn.addEventListener('click', closeModal);
}

function closeModal() {
  refs.modal.classList.toggle('footer__backdrop--hidden');
  refs.bodyScroll.classList.toggle('is-open');

  refs.overlay.style.opacity = '1';
  refs.modal.classList.toggle('modal-bg');
  refs.closeModalBtn.removeEventListener(closeModal);
  document.removeEventListener('keydown', eventKeydown);
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
