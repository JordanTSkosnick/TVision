//Jordan Skosnick
//API KEY = a082f301
var recShows = ['Planet Earth 2', 'Band of Brothers', 'Planet Earth', 'Game Of Thrones', 'Breaking Bad', 'The Wire', 
		'Rick and Morty', 'Cosmos: A Spacetime Odyssey', 'Blue Planet 2', 'Cosmos', 'The World at War', 'The Sopranos', 
		'Life', 'Avatar: The Last Airbender', 'Sherlock', 'Human Planet', 'The Civil War', 'The Twilight Zone', 'Dekalog',
	        'Firefly', 'True Detective', 'Fullmetal Alchemist: Brotherhood', 'Last Week Tonight with John Oliver', 'Fargo',
	        'Batman: The Animated Series', 'Death Note', 'The Blue Planet', 'One Punch Man', 'Cowboy Bebop', 'Frozen Planet',
	        'Black Mirror', "Monty Python\'s Flying Circus", 'Pride and Prejudice', 'Africa', 'Stranger Things', 'Das Boot',
	        'Westworld', 'Arrested Development', 'House of Cards', 'Friends', 'Seinfield', 'Only Fools and Horses....',
	        'Over the Garden Wall', 'TVF Pitchers', 'Twin Peaks', 'Narcos', 'Freaks and Geeks', 'I, Claudius', 'Gravity Falls',
	        'Fawlty Towers'];

//Creates an on submit listener for the search bar on the index page.
$(document).ready(function() {
  $('#searchForm').on('submit', function(e) {
    var tvShowName = $('#searchText').val();
    callAPI(tvShowName);
    e.preventDefault();
  });
});

function callAPI(showName) {
	axios.get('http://www.omdbapi.com?s='+showName+'&type=series&apikey=a082f301') //Calls the API with the api key
	.then( function(res) {
		//console.log(res);
		var showArr = res.data.Search;
		var output = '';
		for(i = 0; i < showArr.length; i++) { //loops through the results and puts the show names in an array.
			output += `
          <div class="col-4">
            <div class="well text-center">
              <img src="${showArr[i].Poster}">
              <h5>${showArr[i].Title}</h5>
              <a onclick="movieSelected('${showArr[i].imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
		}
        $('#shows').html(output);
	})
}

