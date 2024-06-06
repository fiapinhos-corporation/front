let usuario = JSON.parse(localStorage.getItem("usuario"));


let nome = document.getElementById("nomeUser")
nome.innerText = usuario.nome

let pontos = document.getElementById("pontosUser")
pontos.innerText = usuario.pontos

let emailSection = document.getElementById("idEmail")
emailSection.innerText = usuario.emailUsuario

let senhaSection = document.getElementById("idSenha")
senhaSection.innerText = usuario.senhaUsuario

let cpfSection = document.getElementById("idCPF")
cpfSection.innerText = usuario.cpfUsuario

let enderecoSection = document.getElementById("idEndereco")
enderecoSection.innerText = usuario.enderecoUsuario

let cepSection = document.getElementById("idCEP")
cepSection.innerText = usuario.cepUsuario

let telefoneSection = document.getElementById("idTelefone")
telefoneSection.innerText = usuario.telefoneUsuario

const logoutUser = document.getElementById("Logout");
logoutUser.addEventListener("click",()=>{
    localStorage.removeItem("usuario");
    window.location.href = "./cadastro.html";
});