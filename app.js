function toggleLoginform(show) {
  document.getElementById("login-form").style.display = show ? "block" : "none";
  document.getElementById("user-card").style.display = show ? "none" : "block";
}

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); //Evita o envio padrão do form

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      const loginResponse = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        }),
      });

      if (loginResponse.ok) {
        const userData = await loginResponse.JSON();
        localStorage.setItem("loggedUser", JSON.stringify(userData));
      } else {
        alert("Login falhou! Verifque suas credenciais.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Erro na conexão");
    }
  });
