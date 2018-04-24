//Jordan Skosnick
//API KEY = a082f301
var recShows = ['The Sopranos', 'The Wire', 'Breaking Bad', 'Mad Men', 'Seinfeld', 'The Simpsons', 'The Americans', 'Freaks and Geeks', 'Game of Thrones', 'The West Wing',
                'Black Mirror', 'Narcos', 'The Crown', 'Sons of Anarchy', 'True Detective', 'Homeland', 'House', 'American Horror Story', 'Supernatural', 'Entourage',
                'M*A*S*H', 'Twin Peaks', 'Star Trek', 'Curb Your Enthusiasm', 'Cheers', 'The Office', 'Friday Night Lights', 'Veep', 'Westworld', 'Lost', 'Mindhunter',
                'Arrested Development', 'The X-Files', 'I Love Lucy', 'South Park', 'Stranger Things', 'Law & Order', 'Buffy the Vampire Slayer', 'Orange is the New Black',
                'The Shield', 'Fargo', '24', 'Fawlty Towers', 'Roots', 'Sex and the City', 'The Wonder Years', 'Chappelle\'s Show', 'Happy Days', 'Vikings', 'Babylon Berlin',
                'Roseanne', 'The Ren & Stimpy Show', 'The Walking Dead', 'House of Cards', 'Doctor Who', '30 Rock', 'Bloodline', 'Sherlock', 'Peaky Blinders', 'Downton Abbey'];

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
              <a onclick="setShowID('${showArr.imdbID}')" class="btn btn-primary" href="showdetails.html">Show Details</a>`;
    if(sessionStorage.getItem('username')) {
      output +=`<a onclick="watchedShow('${showArr.imdbID}','${showArr.Title}')" class="btn btn-primary" href="#">👁</a>
            </div>
          </div>`;
    }
    else {
      output += ` </div>
          </div>`;
    }

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
