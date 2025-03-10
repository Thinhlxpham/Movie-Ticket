function searchActive(value) {
  const input = document.querySelector(".nav_input");
  input.focus();
}

async function searchBarEnter(event) {
  let value = document.querySelector(".nav_input").value;
  const input = document.querySelector(".nav_input");

  if (event.keyCode == 13) {
    if (input === document.activeElement) {
      searchResult(value);
      await moviesSearch(value)
      return setTimeout(() =>loadingDone(), 1000)
    }
    value = document.querySelector(".movie_input").value;
    searchResult(value);
    await moviesSearch(value);
    setTimeout(() =>loadingDone(), 1000)
  }
}

async function searchOnClick() {
  const value = document.querySelector(".movie_input").value;

  searchResult(value);
  await moviesSearch(value)
  setTimeout(() =>loadingDone(), 1000)
}

function searchResult(value) {
  const searchBar = document.querySelector(".movie_top");

  if (!searchBar) {
    console.error("Error: .movie_top element not found!");
    return;
  }

  const searchBarHTML = `
    <h2 class="movies_top--title">Search results for:</h2>
    <h2 class="movie_search--result">"${value}"</h2>
  `;

  searchBar.innerHTML = searchBarHTML;
  searchBar.classList.add("movie_search--result-visible");
}

async function moviesSearch(value) {

  const response = await fetch(
    `https://www.omdbapi.com/?s=${value}&apikey=b3770ca8`

  );

  const searchResults = await response.json();

  const array = await searchResults.Search.slice(0, 6);

  const movies = document.querySelector(".movies_list");

  const moviesHTML = array
  .map(
    (movie) => 
`<div class="movie">
<figure class="movie_img--wrapper">
  <img class="movie_img" src="${movie.Poster}" alt="">
  <h3 class="movie_info--title">${movie.Title}</h3>


</figure>
<h4 class="movie_title">${movie.Title}</h4>`
  )
  .join("");

   movies.innerHTML =
      `<i class="fa-solid fa-spinner movies_list--loading movies_list--loading"></i>
` + moviesHTML

console.log('pending')
  }


function loadingDone() {
  const targetMovie = document.querySelectorAll('.movie');

  const targetLoading = document.querySelector(".movies_list--loading");

  targetLoading.classList.remove("movies_list--loading");
  targetMovie.forEach((movie) => movie.classList.remove("movie_list--loading") )


  console.log('removed')
}
