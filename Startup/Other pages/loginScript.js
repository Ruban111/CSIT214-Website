function saveUser(username, password) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ "username": username, "password": password });
    localStorage.setItem("users", JSON.stringify(users));
  }

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    if(username!=""&password!=""){
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        alert("Login successful!");
        window.location.assign("Homepage.html");
        return;
      }
    }
}
    alert("Invalid username or password.");

  }

  function register() {
    var newUsername = document.getElementById("new_username").value;
    var newPassword = document.getElementById("new_password").value;
    saveUser(newUsername, newPassword);
    if(newUsername!=""&newPassword!=""){
    alert("Registration successful!");
    window.location.assign("Login.html");
    }else{
        alert("Enter username and password"); 
    }
  }