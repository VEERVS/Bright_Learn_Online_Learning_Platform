function validateLogin() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user === "" || pass === "") {
        alert("All fields are required!");
        return false;
    }

    var users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[user]) {
        alert("User not found! Please sign up first.");
        return false;
    }

    if (users[user] !== pass) {
        alert("Incorrect password!");
        return false;
    }

    alert("Login Successful!");
    window.location.href = "index.html";
    return false;
}
