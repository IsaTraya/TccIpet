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
// Verifica se o usuário já entrou no app
window.addEventListener("load", () => {
  const hasVisited = localStorage.getItem("visited");

  if (hasVisited) {
    // Se já visitou, vai direto para a página principal
    document.getElementById("welcome").style.display = "none";
    document.getElementById("main").style.display = "flex";
  } else {
    // Se for a primeira vez, mostra a tela de boas-vindas
    setTimeout(() => {
      document.getElementById("welcome").style.display = "none";
      document.getElementById("main").style.display = "flex";
      localStorage.setItem("visited", "true"); // Marca como visitado
    }, 3000);
  }
});

// Função de pesquisa
const searchInput = document.getElementById("search");
const items = document.querySelectorAll(".menu li");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();

    items.forEach(item => {
      let text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
}

// Eventos dos botões inferiores
document.getElementById("btn-back")?.addEventListener("click", () => {
  alert("Voltando para a página anterior...");
});

document.getElementById("btn-menu")?.addEventListener("click", () => {
  alert("Abrindo menu...");
});

document.getElementById("btn-profile")?.addEventListener("click", () => {
  alert("Abrindo perfil do usuário...");
});
