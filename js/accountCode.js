$(document).ready(function() {
  $('#accountform').on('submit', function(e) {
    e.preventDefault();
    var username = $('#usernameText').val();
    var password = $('#passwordText').val();
    var email = $('#emailText').val();
    if(validate(email, username, password)) {
        if(callDB.createNewAccount(email, username, password)) {
            window.open("login.html");
            alert("You have created an account, please log in.");
        }
        else {
            alert("Username or email is already taken. Please try again with a different username or email.");
        }
    }
    else {
        alert("Email must be valid, username must be greater than 3 character and password must be greater than 5 characters.");
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
        location.replace("index.html");
    }
    else {
        alert("Login was unsuccessful.");
    }

  });
    })

function validate(email, username, password) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailPattern.test(email) && username.length > 3 && password.length > 5) {
        return true; 
    }
    else {
        return false;
    }
}

function logout() {
    sessionStorage.removeItem('username');
    alert("You have logged out.");
    location.replace("index.html");
}