/* Esse js serve para verificar se o user ta logado.*/
let user = JSON.parse(localStorage.getItem("usuario"));

if(user){
console.log("User logado");

}else{
    window.location.href = "../pages/cadastro.html";
}