// const API_KEY = "9ad3dd22";

// const helper = "https://www.omdbapi.com/?t=Inception&apikey=9ad3dd22"

const movieName = document.querySelector(".movie-name");
const moviePoster = document.querySelector(".movie-poster");
const searchButton = document.querySelector(".search-button");

async function searchMovie() {
  const data = await fetch(
    `https://www.omdbapi.com/?t=${movieName.value}&apikey=9ad3dd22`,
  );
  const movieData = await data.json();
  console.log(movieData);
  moviePoster.src = movieData.Poster;
}
searchButton.addEventListener("click", ()=>{
    searchMovie();
})
console.log("manshu kataria gadha hai");
async function makeRequest(data){
  console.log(data);
  console.log
}