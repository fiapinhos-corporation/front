let usuario = JSON.parse(localStorage.getItem("usuario"));

let option = document.getElementById("lixo")
let img = document.getElementById("img-lixo")
let inputKG = document.getElementById("inputkg");
let valorPorKg = document.getElementById("valor-por-kg");
let valorAReceber = document.getElementById("valor-a-receber");
let valor = 5.5

option.addEventListener("change", function(){
    if(option.value == "aluminio"){
        img.src = "../assets/icons/cans1.svg"
        valor = 5.5
    }else if(option.value == "componentes-eletrônicos"){
        img.src = "../assets/images/pilha.png"
        valor = 33
    }else if(option.value == "cobre"){
        img.src = "../assets/images/copper.webp"
        valor = 33
    }else if(option.value == "papel"){
        img.src = "../assets/images/papel.webp"
        valor = 0.7
    }else if(option.value == "plastico"){
        img.src = "../assets/images/garrafa-pet.png"
        valor = 1.69
    }else if(option.value == "vidro"){
        img.src = "../assets/images/garrafa-vidro.webp"
        valor = 0.1
    }else{
        console.log("Algo deu errado")
    }
})

inputKG.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
    valorPorKg.innerText = valor.toString() + " R$"
    let valorTotal = inputKG.value * valor

    console.log(valor)
    console.log(valorTotal)
    valorAReceber.innerText = valorTotal.toString() + " R$"
    }
})