let user = JSON.parse(localStorage.getItem("usuario"));

let msgPontos = document.getElementById("pontos")
msgPontos.innerText = user.pontos


function validarRecibo(inputNr, inputValor) {
    let msg = document.querySelector(".valida");
    let aux = "12345678"
    if(inputNr.value === aux && inputValor.value != ""){
        msg.classList.add("valido")
        msg.innerText = "Verificação feita pontos adicionados na conta";
        let pontosUser = parseInt(user.pontos)
        let valor = parseInt(inputValor.value);
        let pontosAux = Math.round(valor/ 5);
        let total = pontosAux + pontosUser;
        user.pontos = total
        localStorage.setItem("usuario", JSON.stringify(user));


        setTimeout(function(){
            msg.setAttribute("class","valida");
            msg.innerText = "";
            window.location.href = "../pages/pontos.html";
        }, 5000);
        return false;
    }
    msg.setAttribute("class","erro");
    msg.innerText = "Informações incorretas foram inseridas!";
    setTimeout(function(){
      msg.innerText = "";
      msg.removeAttribute("class","erro")
      },5000)
        return false;

}