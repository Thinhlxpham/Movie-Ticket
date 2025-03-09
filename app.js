async function fetchData(){
  const apiKey = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b3770ca8')

  const data = await apiKey.json()

  return data
}

 async function searchBarEvent(){
  let search = await fetchData()
  const movieList = document.querySelector('.movies_content');

  const searchHTML = search.map((search) => {
    return `<div class="movies_list">
            <i class="fa-solid fa-spinner movie_list--loading"></i>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest.jpg" alt="">
                <h3 class="movie_info--title">Guardians of the Galaxy Vol .2</h3>

              </figure>
              <h4 class="movie_title">Guardians of the Galaxy Vol. 2</h4>
            </div>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest2.jpg" alt="">
                <h3 class="movie_info--title">The Avenger</h3>

              </figure>
              <h4 class="movie_title">The Avenger</h4>
            </div>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest3.jpg" alt="">
                <h3 class="movie_info--title">Spider-man: Homecoming</h3>

              </figure>
              <h4 class="movie_title">Spider-man: Homecoming</h4>
            </div>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest4.jpg" alt="">
                <h3 class="movie_info--title">Minions: Rise of Gru</h3>

              </figure>
              <h4 class="movie_title">Minions: Rise of Gru</h4>
            </div>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest5.jpg" alt="">
                <h3 class="movie_info--title">Spider-Man: Into the Spider-Verse</h3>

              </figure>
              <h4 class="movie_title">Spider-Man: Into the Spider-Verse</h4>
            </div>
            <div class="movie">
              <figure class="movie_img--wrapper">
                <img class="movie_img" src="asset/postertest6.jpg" alt="">
                <h3 class="movie_info--title">Nope</h3>

              </figure>
              <h4 class="movie_title">Nope</h4>
            </div>
          </div>`;
  });

  movieList.innerHTML = searchHTML;
}
searchBarEvent();



