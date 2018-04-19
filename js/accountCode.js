$(document).ready(function() {
  $('#accountform').on('submit', function(e) {
    e.preventDefault();
    var username = $('#usernameText').val();
    var password = $('#passwordText').val();
    var email = $('#emailText').val();
    if(callDB.createNewAccount(email, username, password)) {
        window.open("login.html");
        alert("You have created an account, please log in.");
    }
    else {
        alert("Login is invalid please try again with a different username or email.");
    }
});
    $('#loginaccform').on('submit', function(y) {
    y.preventDefault();
    console.log("test");
    var loginusername = $('#usernameText').val();
    var loginpassword = $('#passwordText').val();
    if(callDB.loginExistingAccount(loginusername, loginpassword)) {
        sessionStorage.setItem('username', loginusername);
        alert("Login was successful.");
        window.open("index.html");
        //test
    }
    else {
        alert("Login was unsuccessful.");
    }

  });
})
