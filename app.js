

// 'http://www.omdbapi.com/?i=tt3896198&apikey=b3770ca8'

async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function moviesSearch(value) {
  if (!value.trim()) return;

  let search = await fetchData(`http://www.omdbapi.com/?i=tt3896198&apikey=b3770ca8`);
  if (!search || !search.Search) {
    console.log("No movies found!");
    return;
  }

  const array = search.Search.slice(0, 6);
  const movies = document.querySelector(".movies_list");

  const moviesHTML = array
    .map(
      (movie) => `
      <div class="movie">
        <figure class="movie_img--wrapper">
          <img class="movie_img" src="${movie.Poster}" alt="">
          <h3 class="movie_info--title">${movie.Title}</h3>
        </figure>
        <h4 class="movie_title">${movie.Title}</h4>
      </div>`
    )
    .join("");

  movies.innerHTML = moviesHTML;
}

function searchActive() {
  document.querySelector(".nav_input").focus();
}

function searchResult(value) {
  const searchBar = document.querySelector(".movies_top");
  searchBar.innerHTML = `
    <h2 class="movies_top--title">Search results for:</h2>
    <h2 class="movie_search--result">"${value}"</h2>
  `;
}

async function searchBarEnter(event) {
  if (event.keyCode !== 13) return;

  let value = document.querySelector(".nav_input").value.trim();
  if (!value) return;

  searchResult(value);
  await moviesSearch(value);
}

async function searchOnClick() {
  let value = document.querySelector(".movie_input").value.trim();
  if (!value) return;

  searchResult(value);
  await moviesSearch(value);
}

console.log(moviesSearch('The Avenger'));