function registerUser() {
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;

if (user === "" || pass === "") {
    alert("All fields are required!");
    return false;
}

// Save account in localStorage
var users = JSON.parse(localStorage.getItem("users")) || {};

if (users[user]) {
    alert("Username already exists!");
    return false;
}

users[user] = pass;
localStorage.setItem("users", JSON.stringify(users));

alert("Account Created Successfully!");
window.location.href = "login.html";
return false;
}
