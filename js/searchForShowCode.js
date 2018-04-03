//Jordan Skosnick
//API KEY = a082f301

//Creates an on submit listener for the search bar on the index page.
$(document).ready(function() {
  $('#searchForm').on('submit', function(e) {
    var keyword = $('#searchText').val();
    getMultipleShowInfo(keyword);
    e.preventDefault();
  });
});

function getMultipleShowInfo(keyword) {
	axios.get('http://www.omdbapi.com?s='+keyword+'&type=series&apikey=a082f301') //Calls the API with the api key
	.then( function(res) {
		//console.log(res);
		var showArr = res.data.Search;
		var output = '';
		for(i = 0; i < showArr.length; i++) { //loops through the results and puts the show names in an array.
			output += `
          <div class="col-4">
            <div class="well text-center">
              <img src="${showArr[i].Poster}" height="450" width="350">
              <h5>${showArr[i].Title}</h5>
              <a onclick="setShowID('${showArr[i].imdbID}')" class="btn btn-primary" href="showdetails.html">Show Details</a>
              <a onclick="#" class="btn btn-primary" href="#">✪</a>
            </div>
          </div>
        `;
		}
        $('#shows').html(output);
	})
}

function setShowID(id){
	sessionStorage.setItem('SHOW ID', id);
}
