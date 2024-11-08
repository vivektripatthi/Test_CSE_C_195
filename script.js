function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    if(username=='CSE' && password=='CSE'){
        window.location.href='index.html'
    }
    else {
      errorMessage.textContent = "Provide required details";
    }
  }