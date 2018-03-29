//Jordan Skosnick - test
//API KEY = a082f301
var recShows = ['Game Of Thrones','Breaking Bad'];
//Creates an on submit listener for the search bar on the index page.
$(document).ready(function() {
  $('#searchForm').on('submit', function(e) {
    var tvShowName = $('#searchText').val();
    getTVShows(tvShowName);
    e.preventDefault();
  });
});

function getTVShows(showName) {
	axios.get('http://www.omdbapi.com?s='+recShows+'&type=series&apikey=a082f301') //Calls the API with the api key
	.then( function(res) {
		//console.log(res);
		var showArr = res.data.Search;
		var output = '';
		for(i = 0; i < showArr.length; i++) { //loops through the results and puts the show names in an array.
			console.log(showArr[i].Title);
		}
	})
}

/**
function getMovies(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText+'&type=series&apikey=a082f301')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=a082f301')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}






$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    console.log("TEST");
    e.preventDefault();
  });
});


var show='supernatural';
getShows();
function getShows() {
	axios.get('http://www.omdbapi.com/?t='+show+'&apikey=a082f301')
	.then((response) => {
	console.log(response);
	let showData = response.data;
	var name = showData.Title;
	var actors = showData.Actors;
	var awards = showData.Awards;
	var genre = showData.Genre;
	var plot = showData.Plot;
	var released = showData.Released;
	var writer = showData.Writer;
	var rating = showData.imdbRating;
	var imdbID = showData.imdbID;
	var runtime = showData.Runtime;
	var totalSeasons = showData.totalSeasons;
	console.log(name, actors, genre);
	});
}
**/
