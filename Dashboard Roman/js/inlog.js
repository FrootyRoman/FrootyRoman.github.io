// Check if the user is already logged in
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
      displayLoggedInMessage();
    }
  });
  
  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if username and password are correct
    if (username === "admin" && password === "password") {
      // Set logged in state
      localStorage.setItem("loggedIn", "true");
  
      // Display logged in message
      displayLoggedInMessage();
  
      // Redirect to index.html
      displayMessage("success", "Login successful. Redirecting...");
      setTimeout(function() {
        window.location.href = "/index.html";
      }, 2000);
    } else if (username === "admin1" && password === "password1") {
      // Set logged in state
      localStorage.setItem("loggedIn", "true");
  
      // Display logged in message
      displayLoggedInMessage();
  
      // Redirect to index2.html
      displayMessage("success", "Login successful. Redirecting...");
      setTimeout(function() {
        window.location.href = "/index.html";
      }, 2000);
    } else {
      displayMessage("error", "Invalid username or password.");
    }
  });
  
  
  // Display logged in message in navbar
  function displayLoggedInMessage() {
    const loginLink = document.getElementById("loginLink");
    if (loginLink) {
      loginLink.innerHTML = "Logged In";
      loginLink.classList.remove("nav-link");
      loginLink.classList.add("nav-text");
    }
  }
  
  // Display success or error message
  function displayMessage(type, message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.classList.add("alert", "mt-3");
  
    if (type === "success") {
      messageDiv.classList.add("alert-success");
    } else if (type === "error") {
      messageDiv.classList.add("alert-danger");
    }
  
    setTimeout(function() {
      messageDiv.innerHTML = "";
      messageDiv.classList.remove("alert", "alert-success", "alert-danger", "mt-3");
    }, 3000);
  }
  
  
  // Check if the user is already logged in
  document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
      console.log("User is logged in");
    } else {
      console.log("User is not logged in");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loggedInButton = document.getElementById("loggedIn");
    const loginLink = document.getElementById("loginLink");

    if (localStorage.getItem("loggedIn") === "true") {
      loggedInButton.style.display = "block";
      loginLink.style.display = "none";
    } else {
      loggedInButton.style.display = "none";
      loginLink.style.display = "block";
    }
  });

  // Handle logout button click
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    location.reload();
  });

  