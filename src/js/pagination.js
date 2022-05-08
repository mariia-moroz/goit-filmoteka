// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';



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

const Tuifirst = document.querySelector(".tui-first")
console.log(Tuifirst.textContent)
//  Tuifirst.textContent = "1"
//  console.log(Tuifirst)


const tiuFirstIcon = document.createElement("p");
console.log(tiuFirstIcon); // <h1></h1>

tiuFirstIcon.textContent = "1";
tiuFirstIcon.classList.add("ico-first")
console.log(tiuFirstIcon); // <h1>This is a heading</h1>
Tuifirst.append(tiuFirstIcon)
