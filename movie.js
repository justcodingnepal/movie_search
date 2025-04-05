document.getElementById('search-movie').addEventListener('click',fetch_movie);


async function fetch_movie() {
    let movie_name=document.getElementById("search_bar").value
    const response = await fetch(`http://www.omdbapi.com/?t=${movie_name}&apikey=2d21d2e`)
    const data = await response.json()
    if(!data.Error){
        document.getElementById("movie_tit").innerHTML=`${data.Title}`
        document.getElementById("movie_yr").innerHTML=`${data.Year}`
        document.getElementById("movie_rat").innerHTML=`${data.imdbRating}`
        document.getElementById("movie-image").src = data.Poster;
        document.getElementById("movie_genre").innerHTML=`${data.Genre}`
        document.getElementById("movie_actor").innerHTML=`${data.Actors}`
        document.getElementById("movie_writer").innerHTML=`${data.Writer}`
        document.getElementById("movie_language").innerHTML=`${data.Language}`
        document.getElementById("movie_director").innerHTML=`${data.Director}`
    }else{
        document.querySelector('.container').innerHTML = 
            `<div style="width: 100%; 
                         text-align: center;
                         padding: 15px; 
                         font-size: 24px;
                         font-family: 'Courier New', Courier, monospace;
                         display: flex;
                         justify-content: center;
                         align-items: center;">
                Oops! Movie not found
             </div>`;
    }
}