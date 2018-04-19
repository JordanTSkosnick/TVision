//Jordan Skosnick
//API KEY = a082f301
var recShows = ['Seinfeld', 'The Walking Dead', 'Grey\'s Anatomy','Riverdale','Band of Brothers', 'Planet Earth', 'Game of Thrones', 'Breaking Bad', 'The Wire', 
		'Rick and Morty', 'Cosmos: A Spacetime Odyssey', 'Blue Planet', 'Cosmos', 'The World at War', 'The Sopranos', 
		'Life', 'Avatar: The Last Airbender', 'Sherlock', 'Human Planet', 'The Civil War', 'The Twilight Zone', 'Dekalog',
	        'Firefly', 'True Detective', 'Fullmetal Alchemist: Brotherhood', 'Last Week Tonight with John Oliver', 'Fargo',
	        'Batman: The Animated Series', 'Death Note', 'The Blue Planet', 'One Punch Man', 'Cowboy Bebop', 'Frozen Planet',
	        'Black Mirror', 'Pride and Prejudice', 'Africa', 'Stranger Things', 'Das Boot', 'Westworld', 'Arrested Development',
	        'House of Cards', 'Friends', 'Only Fools and Horses....', 'Over the Garden Wall', 'TVF Pitchers',
	        'Twin Peaks', 'Narcos', 'Freaks and Geeks', 'I, Claudius', 'Gravity Falls', 'Fawlty Towers'];

//This is testing the array that will be created from the database where it keeps track of all the shows a particular user watches.


$(document).ready(function() {
	output='';
  var watchedShows = "Filler Show";
  if(sessionStorage.getItem('username')){
    var username = sessionStorage.getItem('username');
    var watchedShows = callDB.getWatchedShows(username);
    console.log(watchedShows);
    if(watchedShows == ''){
      watchedShows = "Filler Show";
    }
  }
  console.log(watchedShows);
	compareList(recShows, watchedShows);
});

function compareList(recShows, watchedShows) {
    for(i=0; i < recShows.length; i++) { //Testing the compare function
    	for(q=0; q < watchedShows.length; q++) {
    		if(watchedShows[q] == recShows[i]) {
    			break;
    		}
    		else if(q == parseInt(watchedShows.length)-1){
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
              <img src="${showArr.Poster}" alt="image-not-found.gif" height="450" width="350">
              <h5>${showArr.Title}</h5>
              <a onclick="setShowID('${showArr.imdbID}')" class="btn btn-primary" href="showdetails.html">Show Details</a>
              <a onclick="watchedShow('${showArr.imdbID}','${showArr.Title}')" class="btn btn-primary" href="#">👁</a>
            </div>
          </div>
        `;
        $('#shows').html(output);
	})
}

function setShowID(id){
	sessionStorage.setItem('SHOW ID', id);
}

function watchedShow(id, showName){
  console.log(showName);
  var username = sessionStorage.getItem('username'); // change later so you have to be logged in
  if(callDB.setWatchedShow(id, showName, username)){
    alert("You watched this show.");
  }
  else {
    alert("You have already watched this show.");
  }
}
