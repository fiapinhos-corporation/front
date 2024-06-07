const cancelButton = document.getElementById("cancel");
let contact = document.querySelector(".contact-btn");

const contactForm = document.getElementById('favDialog');
const body = document.querySelector("body")
const submitMessage = document.getElementById("send-message") 

contact.addEventListener("click", () => {
    contactForm.showModal()
})

cancelButton.addEventListener("click", () => {
    contactForm.close("animalNotChosen");
});

submitMessage.addEventListener("click", (e)=>{
    e.preventDefault()
    const name = document.getElementById("nomeUser")
    const email = document.getElementById("emailUser")
    const message = document.getElementById("messageUser")
    let mensagemContato = {
        "nome" : name.value,
        "email" : email.value,
        "mensagem" : message.value
    }
    localStorage.setItem("mensagens-contato", adicionaItens(mensagemContato))
    name.textContent = ""
    email.textContent = ""
    message.textContent = ""
    contactForm.close();
})

function adicionaItens(mensagemContato){
    const mensagensContato = localStorage.getItem("mensagem-contato")
    let mensagensContatoArray = []
    if (JSON.parse(mensagensContato) === null){
        mensagensContatoArray.push(mensagemContato)
    }
    else{
        mensagensContatoArray = JSON.parse(mensagensContato)
        mensagensContatoArray.push(mensagemContato)
    }

    mensagensContatoArray.push(mensagemContato)
    localStorage.setItem("mensagem-contato", JSON.stringify(mensagensContatoArray))
    let mensagens = lerItens()
    mensagens.forEach((msg)=>{
        console.log(`Dados salvos! Nome: ${msg.nome}\nEmail: ${msg.email}\nMensagem: ${msg.mensagem}`)
    })
}

function lerItens(){
    const mensagensContato = localStorage.getItem("mensagem-contato")
    const mensagensContatoArray = JSON.parse(mensagensContato)
    return mensagensContatoArray
}