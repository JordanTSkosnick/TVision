//themoviedb key- aa62cf554a8aba5e917d7fcf27de6b8f
//omdb key - a082f301
$(document).ready(function() {
	getShowDetail();
});

function getShowDetail(){
	showID = sessionStorage.getItem('SHOW ID');
	axios.get('http://www.omdbapi.com?i='+showID+'&type=series&apikey=a082f301').then( function(res) {
		details = res.data;
        console.log(showID);
		output ='';
        recText = `<h5><strong>&nbsp; &nbsp; If you liked ${details.Title} then you may like these shows:</strong></h5>`;
        recOutput = '';
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
        $('#justText').html(recText);
        console.log(details.imdbID);
        axios.get('https://api.themoviedb.org/3/find/'+details.imdbID+'?api_key=aa62cf554a8aba5e917d7fcf27de6b8f&language=en-US&external_source=imdb_id') //Calls the API with the api key
        .then( function(res) {
            var id = res.data.tv_results[0].id;
            axios.get('https://api.themoviedb.org/3/tv/'+id+'/recommendations?api_key=aa62cf554a8aba5e917d7fcf27de6b8f&language=en-US&page=1&append_to_response=external_ids') //Calls the API with the api key
            .then( function(simShows) {
                console.log(simShows);
                var recArr = simShows.data.results;
                var showNameArr = [];

                for(i = 0; i <recArr.length; i++) {
                    /////////////////////////////////////////
                    showNameArr.push(recArr[i].name);
                }

                for(z = 0; z < showNameArr.length; z++) {
                      axios.get('http://www.omdbapi.com?t='+showNameArr[z]+'&type=series&apikey=a082f301').then( function(showRes) {
                            var showArr = showRes.data;
                            recOutput += `
                                <div class="col-4">
                                    <div  class="text-center">
                                            <img src="${showArr.Poster}" alt="image-not-found.gif" height="450" width="350">
                                            <h5>${showArr.Title}</h5>
                                            <a onclick="setShowID('${showArr.imdbID}')" class="btn btn-primary" href="showdetails.html">Show Details</a>`;
                            if(sessionStorage.getItem('username')) {
                                    recOutput +=`<a onclick="watchedShow('${showArr.imdbID}','${showArr.Title}')" class="btn btn-primary" href="#">👁</a>
                                                </div>
                                                </div>`;
                                    }
                            else {
                                    recOutput += ` </div>
                                        </div>`;
                            }
                        $('#shows').html(recOutput);
                      })  
                }
                })
            })
        })
}
