export default function renderFilmCard({
  root,
  searchResults,
  base_url,
  poster_size,
  backdrop_sizes,
}) {
  const { results } = searchResults;
  results.forEach(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
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
        <p class="card-preview-info__data">Genre | ${parseInt(release_date)}</p>
        <span class="card-preview-info__rating">${vote_average}</span>
      </div>
    </div>`,
    );
  });
}
