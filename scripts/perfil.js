let usuario = JSON.parse(localStorage.getItem("user"));
console.log(usuario.nome)

let nome = document.getElementById("nomeUser")
nome.innerText = usuario.nome

let pontos = document.getElementById("pontosUser")
pontos.innerText = usuario.pontos

let nomeSection = document.getElementById("idEmail")
nomeSection.innerText = usuario.nome