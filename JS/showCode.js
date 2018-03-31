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
		`;
		$('#showdetail').html(output);
	})
}