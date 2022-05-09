// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import renderPopFilms from './showMovieGallery';

const options = {
  totalItems: 200,
  visiblePages: 5,
  itemsPerPage: 20,
  page: getPage(),
  usageStatistics: false,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);

// внесення номеру сторінки в local Storage

pagination.on('afterMove', event => {
  const currentPage = event.page;
  localStorage.setItem('pagination-page', JSON.stringify(currentPage));
  const paginationData = localStorage.getItem('pagination-page');
  if (paginationData) {
    const pageFromLS = JSON.parse(paginationData);
  renderPopFilms(pageFromLS);
}});

// забираємо з local Storage номер сторінки
function getPage() {
  const paginationData = localStorage.getItem('pagination-page');
  if (paginationData) {
    const pageFromLS = JSON.parse(paginationData);
    return pageFromLS;
  } else {
    return 1;
  }
}
