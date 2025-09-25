// Aguarda 5 segundos e redireciona automaticamente
setTimeout(() => {
  window.location.href = "cadastro.html";
}, 5000);

// Máscara de celular
document.addEventListener("DOMContentLoaded", () => {
  const celular = document.getElementById("celular");
  if (celular) {
    celular.addEventListener("input", function(e) {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) e.target.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
      else if (v.length > 2) e.target.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
      else if (v.length > 0) e.target.value = `(${v}`;
    });
  }

  // Força da senha
  const senha = document.getElementById("senha");
  if (senha) {
    senha.addEventListener("input", function() {
      const strength = document.getElementById("password-strength");
      let msg = "";
      let color = "red";

      if (this.value.length < 6) {msg="Fraca"; color="red";}
      else if (/[A-Z]/.test(this.value)&&/\d/.test(this.value)&&this.value.length>=8){msg="Forte";color="green";}
      else {msg="Regular"; color="orange";}

      strength.textContent="Força: "+msg;
      strength.style.color=color;
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const home = document.getElementById("home");

  // Verifica se o usuário já acessou antes
  const jaEntrou = localStorage.getItem("jaEntrou");

  if (jaEntrou) {
    // Pula direto para a Home
    welcome.classList.add("hidden");
    home.classList.remove("hidden");
  } else {
    // Mostra Boas-Vindas.html por 3 segundos e depois vai para a Home.html 
    setTimeout(() => {
      welcome.classList.add("hidden");
      home.classList.remove("hidden");

      // Marca que o usuário já entrou
      localStorage.setItem("jaEntrou", "true");
    }, 3000);
  }
});

