function validateform() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Username and Password cannot be empty.");
      return false; // Prevent form submission
    }
    else {
        alert("Login Successful!");
        window.location.href = "indexnew.html";
        return true;   // Allow form submission
    }

  }