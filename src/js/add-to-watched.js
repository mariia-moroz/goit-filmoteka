import createModal from './filmInfoModalCreate';
let dataWatched = [];
export const KEY_WATCHED = 'Watched';
export const KEY_QUEUE = 'Queue';
const textAddWatch = 'add to watched';
const textAddQueue = 'add to queue';
const textDelWatch = 'delete watched';
const textDelQueue = 'delete queue';

export function addToLocalStore(data) {
  const watchedAdd = document.querySelector('.film-info__button--watched');
  watchedAdd.addEventListener('click', () =>
    onClickWatched(KEY_WATCHED, textAddWatch, textDelWatch, watchedAdd),
  );
  const queueAdd = document.querySelector('.film-info__button--queue');
  queueAdd.addEventListener('click', () =>
    onClickWatched(KEY_QUEUE, textAddQueue, textDelQueue, queueAdd),
  );
  function onClickWatched(KEY, textAdd, textDel, targetAdd) {
    if (localStorage[KEY] !== undefined) {
      dataWatched = JSON.parse(localStorage[KEY]);
    }
    // watchedAdd.innerText = 'delete from watched';
    watchedAdd.classList.add('delete');
    console.log(data.id);
    //  перевірка чи є фільм в watched
    const localFilmId = dataWatched.flatMap(dataWatched => dataWatched.id);

    localFilmId.findIndex(e => e === data.id) === -1
      ? (targetAdd.innerText = textDel)
      : (targetAdd.innerText = textAdd);

    if (localFilmId.findIndex(e => e === data.id) === -1) {
      dataWatched.push(data);
      localStorage.setItem(KEY, JSON.stringify(dataWatched));
    } else {
      // delete from localstorage
      dataWatched.splice(
        localFilmId.findIndex(e => e === data.id),
        1,
      );
      localStorage.removeItem(KEY);
      localStorage.setItem(KEY, JSON.stringify(dataWatched));
    }
    dataWatched = [];
  }
}
