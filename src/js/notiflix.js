import Notiflix from 'notiflix';
const notiflixParams = {
  position: 'center-top',
  timeout: 1500,
};

class Notification {
  constructor(notiflixParams) {
    this.options = notiflixParams;
  }

  onAddToWatched() {
    Notiflix.Notify.success('Added to Watched', this.options);
  }

  onDeleteWatched() {
    Notiflix.Notify.warning('Deleted from Watched', this.options);
  }

  onAddToQueue() {
    Notiflix.Notify.success('Added to Queue', this.options);
  }

  onDeleteQueue() {
    Notiflix.Notify.warning('Deleted from Queue', this.options);
  }

  onLoadingleAdd() {
    Notiflix.Loading.arrows('Please wait ...', this.options);
  }
  onLoadingRemove() {
    Notiflix.Loading.remove();
  }
}

export default new Notification(notiflixParams);
