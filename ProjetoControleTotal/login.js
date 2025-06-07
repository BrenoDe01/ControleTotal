document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("usuario", username);
    window.location.href = "Dashboard.html";
  } else {
    alert("Preencha todos os campos!");
  }
});