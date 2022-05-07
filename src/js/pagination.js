
// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';


// const options = {
//     totalItems: 20,
//     itemsPerPage: 2,
//     visiblePages: 5,
//     page: 1,
//     centerAlign: true,
//     firstItemClassName: "page_hidden",
//     lastItemClassName: 'page_hidden',
//         template: {
//       page: '<a href="#" class="pagination_item ">{{page}}</a>',
//       currentPage: '<a href="#" class="page_active tui-page-btn ">{{page}}</a>',
//       moveButton:
//       '<a href="#" class="pagination_item pagination_button tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}">{{page}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class=" pagination_item tui-is-disabled tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="page_hidden pagination_item tui-{{type}}-is-ellip">' +
//           '<span class="tui-ico-ellip">...</span>' +
//         '</a>'

//     }
//     };

    const options = {
        totalItems: 20,
        itemsPerPage: 2,
        visiblePages: 5,
        page: 1,
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
            '</a>'
        }
      };
      
 
  const pagination = new Pagination('pagination', options);

 