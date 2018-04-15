callDB = {
	createNewAccount: function(email, username, password) {
		var query = "";
		query += "email=";
        query += email;
        query += "&login=";
        query += username;
        query += "&password=";
        query += password;
	
   		var req = new XMLHttpRequest();
   		req.open('POST', 'server.php', false);
   		req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    	req.send(encodeURI(query));
    	console.log(req.responseText);
	    var response = JSON.parse(req.responseText);
		  console.log(response);
		  console.log("^^^");
	    return response['login'];
	},

  loginExistingAccount: function(loginusername, loginpassword) {
    var query = "";
        query += "login=";
        query += loginusername;
        query += "&password=";
        query += loginpassword;

        var req = new XMLHttpRequest();
      req.open('POST', 'server.php', false);
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.send(encodeURI(query));
      console.log(req.responseText);
      var response = JSON.parse(req.responseText);
      console.log(response);
      console.log("^^^");
      return response['login'];
  },

  setWatchedShow: function(id, showName, username) {
    var query = "";
        query += "id=";
        query += id;
        query += "&showName=";
        query += showName;
        query += "&username=";
        query += username;
    var req = new XMLHttpRequest();
    req.open('POST', 'server.php', false);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');      
    req.send(encodeURI(query));
    console.log(req.responseText);
    var response = JSON.parse(req.responseText);
    console.log(response);
    console.log("^^^");
    return response['watched'];
  }
};