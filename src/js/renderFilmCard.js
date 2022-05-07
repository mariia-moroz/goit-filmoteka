export default function renderFilmCard({ root, searchResults, base_url, backdrop_sizes, genres }) {
  const { results } = searchResults;
  results.forEach(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
    let genre1 = '';
    let genre2 = '';
    for (let item in genres) {
      if (genre_ids[0] === genres[item].id) {
        genre1 = genres[item].name;
      }
    }
    for (let item in genres) {
      if (genre_ids[1] === genres[item].id) {
        genre2 = genres[item].name;
      }
    }
    root.insertAdjacentHTML(
      'beforeend',
      `
    <div class="movie" data-id="${id}">
      <img
        class="movie__cover"
        src="${base_url}${backdrop_sizes[0]}${poster_path}"
        alt="${title}"
      />
      <h2 class="card-preview-info__name">${title}</h2>
      <div class="card-preview-info">
        <p class="card-preview-info__data">${genre1}, ${genre2} | ${parseInt(release_date)}</p>
        <span class="card-preview-info__rating">${vote_average}</span>
      </div>
    </div>`,
    );
  });
}
