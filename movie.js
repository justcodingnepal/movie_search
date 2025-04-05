async function loadMovie() {
    let savedMovie = localStorage.getItem("movieName");
    if (savedMovie) {
        fetchMovieByName(savedMovie);
    } else {
        fetchMovieByName("Iron Man");
    }
}
async function fetchMovieByName(movieName) {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=2d21d2e`);
    const data = await response.json();
    
    if (!data.Error) {
        updateMovieData(data);
    } else {
        alert("Movie not found!");
    }
}
function updateMovieData(data) {
    document.getElementById("movie_tit").innerHTML = `${data.Title}`;
    document.getElementById("movie_yr").innerHTML = `${data.Year}`;
    document.getElementById("movie_rat").innerHTML = `${data.imdbRating}`;
    document.getElementById("movie-image").src = data.Poster;
    document.getElementById("movie_genre").innerHTML = `${data.Genre}`;
    document.getElementById("movie_actor").innerHTML = `${data.Actors}`;
    document.getElementById("movie_writer").innerHTML = `${data.Writer}`;
    document.getElementById("movie_language").innerHTML = `${data.Language}`;
    document.getElementById("movie_director").innerHTML = `${data.Director}`;
}
document.getElementById('search-movie').addEventListener('click', () => {
    let movie_name = document.getElementById("search_bar").value;
    localStorage.setItem("movieName", movie_name);
    fetchMovieByName(movie_name);
});
window.onload = loadMovie;
