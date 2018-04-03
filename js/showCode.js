$(document).ready(function() {
	getShowDetail();
});

function getShowDetail(){
	showID = sessionStorage.getItem('SHOW ID');
	axios.get('http://www.omdbapi.com?i='+showID+'&type=series&apikey=a082f301').then( function(res) {
		details = res.data;

		output ='';
		output += `
		<h3>${details.Title}</h3>
		<table class=   "table table-user-information">
        	<tbody>
        	<tr>
        		<td>Rated</td>
        		<td>${details.Rated}</td>
        	</tr>
        	<tr>
        		<td>Released</td>
        		<td>${details.Released}</td>
        	</tr>

        	<tr>
        		<td>Runtime</td>
       			<td>${details.Runtime}</td>
        	</tr>
        	<tr>
        		<td>Genre</td>
        		<td>${details.Genre}</td>
        	</tr>
        	<tr>
        		<td>Summary</td>
        		<td>${details.Plot}</td>
        	</tr>
        	<tr>
        		<td>Writer(s)</td>
        		<td>${details.Writer}</td>
        	</tr>
        	<tr>
        		<td>Actors/Actresses</td>
        		<td>${details.Actors}</td>
        	</tr>
        	<tr>
        		<td>IMDB Rating</td>
        		<td>${details.imdbRating}</td>
        	</tr>
        	<tr>
        		<td>Total Number of Seasons</td>
        		<td>${details.totalSeasons}</td>
        	</tr>
        	<tr>
        		<img src="${details.Poster}" height="450" width="350"> 
        	</tr>
        	</tbody>
        </table>  
		`;
		$('#showdetail').html(output);
	})
}