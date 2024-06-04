/* Esse js serve para verificar se o user ta logado.*/
let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){
console.log("User logado");

}else{
    window.alert("Você precisa ta logado para acessar essa pagina")
    window.location.href = "../cadastro.html";
}