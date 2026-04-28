function field() {
  let user_name = document.getElementById("user_name").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (user_name === "") {
    error.innerText = "❌ Username is required!";
  } else if (password === "") {
    error.innerText = "❌ Password is required!";
  } else if (password.length < 6) {
    error.innerText = "❌ Password too short! Minimum 6 characters.";
  } else {
    error.innerText = "✅ Login Successful!";
  }
}