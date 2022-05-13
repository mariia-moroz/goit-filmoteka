export default function renderFilmCard({ root, base_url, poster_size, movie, genresList, page }) {
  const { id, title, poster_path, vote_average, release_date } = movie;
  let src = '';
  let date = '';
  if (poster_path) {
    src = `
    src="${base_url}w185${poster_path}"
            srcset="
              ${base_url}w185${poster_path}                     1x,
              ${base_url}${poster_size}${poster_path}           2x
            "
    alt="${title}"
    `
    // src="${base_url}${poster_size}${poster_path}" 
    // alt="${title}"
    // `
  } else {
    src = '';
  }

  if (release_date) {
    date = parseInt(release_date);
  } else {
    date = '';
  }

  root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="movie" data-id="${id}">
      <img
        class="movie__cover"
        ${src}
      />
      <h2 class="card-preview-info__name">${title}</h2>
      <div class="card-preview-info">
        <p class="card-preview-info__data">${genresList.slice(0, 2).join(', ')} | ${date}</p>
        <span class="card-preview-info__rating">${vote_average}</span>
      </div>
    </div>`,
  );
}
