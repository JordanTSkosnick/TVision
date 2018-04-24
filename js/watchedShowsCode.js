$(document).ready(function() {
	output='';
	var username = sessionStorage.getItem('username');
	output += `<h3> &nbsp; ${username}</h3>
				<h4> &nbsp; All watched shows : </h4>`;


	var allWatchedShows = callDB.getWatchedShows(username);
	for(i=0; i< allWatchedShows.length; i++) {
		getOneShowInfo(allWatchedShows[i]);
	}
});

function getOneShowInfo(showname) {
	axios.get('http://www.omdbapi.com?t='+showname+'&type=series&apikey=a082f301').then( function(res) {
		var showInfo = res.data;
		output += `<tr>
					<td><a style="text-decoration:none;" onclick="setShowID('${showInfo.imdbID}')" href="showdetails.html">${showname}</a></td>
					</tr>`;
		$('#watchedShows').html(output);
	})

}

function setShowID(id){
	sessionStorage.setItem('SHOW ID', id);
}
//create show details button. <a onclick="setShowID('${showInfo.imdbID}')" href="showInfo.html">