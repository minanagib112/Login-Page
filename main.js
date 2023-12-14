// Get the login form element
var loginForm = document.getElementById("login-form");

// Add an event listener to the form submit event
loginForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username and password input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Get the message element
  var message = document.getElementById("message");

  // Create a login object that holds the data
  var login = {
    username: username,
    password: password
  };

  // Check if the username and password are valid
  if (login.username === "admin" && login.password === "123") {
    // Show a welcome message
    message.textContent = "Welcome, " + login.username + "!";
    message.style.backgroundColor = "green";
  } else {
    // Show a not registered message
    message.textContent = "Not registered!";
    message.style.backgroundColor = "red";
  }
});
