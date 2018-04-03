//Jordan Skosnick
//API KEY = a082f301
var recShows = ['Seinfeld', 'The Walking Dead', 'Grey\'s Anatomy','Riverdale','Band of Brothers', 'Planet Earth', 'Game Of Thrones', 'Breaking Bad', 'The Wire', 
		'Rick and Morty', 'Cosmos: A Spacetime Odyssey', 'Blue Planet', 'Cosmos', 'The World at War', 'The Sopranos', 
		'Life', 'Avatar: The Last Airbender', 'Sherlock', 'Human Planet', 'The Civil War', 'The Twilight Zone', 'Dekalog',
	        'Firefly', 'True Detective', 'Fullmetal Alchemist: Brotherhood', 'Last Week Tonight with John Oliver', 'Fargo',
	        'Batman: The Animated Series', 'Death Note', 'The Blue Planet', 'One Punch Man', 'Cowboy Bebop', 'Frozen Planet',
	        'Black Mirror', 'Pride and Prejudice', 'Africa', 'Stranger Things', 'Das Boot', 'Westworld', 'Arrested Development',
	        'House of Cards', 'Friends', 'Only Fools and Horses....', 'Over the Garden Wall', 'TVF Pitchers',
	        'Twin Peaks', 'Narcos', 'Freaks and Geeks', 'I, Claudius', 'Gravity Falls', 'Fawlty Towers'];

//This is testing the array that will be created from the database where it keeps track of all the shows a particular user watches.
var testWatchedShows = ['Human Planet', 'The Civil War', 'The Twilight Zone', 'Dekalog',
	        'Firefly', 'True Detective', 'Fullmetal Alchemist: Brotherhood', 'Last Week Tonight with John Oliver', 'Fargo',
	        'Batman: The Animated Series', 'Death Note', 'The Blue Planet', 'One Punch Man', 'Cowboy Bebop', 'Frozen Planet',
	        'Black Mirror', 'Pride and Prejudice', 'Africa','House of Cards', 'Friends', 'Only Fools and Horses....', 'Over the Garden Wall', 'TVF Pitchers',
	        'Twin Peaks', 'Narcos', 'Freaks and Geeks', 'I, Claudius', 'Gravity Falls'];

$(document).ready(function() {
	output='';
	compareList(recShows, testWatchedShows);
});

function compareList(recShows, watchedShows) {
    for(i=0; i < recShows.length; i++) { //Testing the compare function
    	for(q=0; q < testWatchedShows.length; q++) {
    		if(testWatchedShows[q] == recShows[i]) {
    			break;
    		}
    		else if(q == parseInt(testWatchedShows.length)-1){
    			getOneShowInfo(recShows[i]);
    		}
    	}
    }
}

function getOneShowInfo(showname){
	axios.get('http://www.omdbapi.com?t='+showname+'&type=series&apikey=a082f301').then( function(res) {
		//console.log(res);
		var showArr = res.data;
		output += `
          <div class="col-4">
            <div  class="text-center">
              <img src="${showArr.Poster}" height="450" width="350">
              <h5>${showArr.Title}</h5>
              <a onclick="setShowID('${showArr.imdbID}')" class="btn btn-primary" href="showdetails.html">Show Details</a>
              <a onclick="#" class="btn btn-primary" href="#">✪</a>
            </div>
          </div>
        `;
        $('#shows').html(output);
	})
}

function setShowID(id){
	sessionStorage.setItem('SHOW ID', id);
}