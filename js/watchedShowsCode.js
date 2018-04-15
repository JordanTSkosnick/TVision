$(document).ready(function() {
	output='';
	var username = sessionStorage.getItem('username');
	output += `<h3> &nbsp; ${username}</h3>
				<h4> &nbsp; All watched shows : </h4>`;
	var allWatchedShows = callDB.getWatchedShows(username);
	console.log(allWatchedShows);
	for(i=0; i< allWatchedShows.length; i++) {
		output += `<tr>
					<td>${allWatchedShows[i]}</td>
					</tr>`;
	}
	$('#watchedShows').html(output);
});
