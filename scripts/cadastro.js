let listaUsuario = [
    {
      nome: "Gustavo Dias",
      emailUsuario: "gd@email.com",
      senhaUsuario: "123456",
      cpfUsuario:"123.123.123-11",
      enderecoUsuario: "Rua são joaquin",
      cepUsuario: "12345-123",
      telefoneUsuario: "11 12345-1234",
      pontos: 2000,
    },
    {
      nome: "Felipe Ribeiro",
      emailUsuario: "fr@email.com",
      senhaUsuario: "123456",
      cpfUsuario:"123.123.123-11",
      enderecoUsuario: "Rua são joaquin",
      cepUsuario: "12345-123",
      telefoneUsuario: "11 12345-1234",
      pontos: 1000,
    },
    {
      nome: "Enrico Del Guerra",
      emailUsuario: "ed@email.com",
      senhaUsuario: "123456",
      cpfUsuario:"123.123.123-11",
      enderecoUsuario: "Rua são joaquin",
      cepUsuario: "12345-123",
      telefoneUsuario: "11 12345-1234",
      pontos: 3000,
    },
  ];

  function validar(inputEmail, inputSenha) {
    let msgStatus = document.querySelector(".validaLogin");
    
    for (let x = 0; x < listaUsuario.length; x++) {
        
        if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
          
            msgStatus.setAttribute("class","sucesso");
            msgStatus.innerText = "Login realizado com sucesso!";

            
            localStorage.setItem("usuario", JSON.stringify(listaUsuario[x]));
            
            setTimeout(function(){
                msgStatus.setAttribute("class","valida");
                msgStatus.innerText = "";
                window.location.href = "../index.html";
            }, 5000);
            return false;
        }
          
    }
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = "Você inseriu a senha ou o email errado";
    setTimeout(function(){
      msgStatus.innerText = "";
      msgStatus.removeAttribute("class","erro")
      },5000)
        return false;
}

function cadastrar(inputNome, inputEmail, inputSenha,inputSenhaAux, inputCPF,inputEndereco,inputCEP,inputTelefone){
    let msgStatus = document.querySelector(".valida")

    if(inputSenha.value == inputSenhaAux.value && inputSenha.value != "" && inputEmail.value != ""){
        msgStatus.setAttribute("class","sucesso");
        msgStatus.innerText = "Cadastro realizado com sucesso!";

        usuario = 
            {
            nome: inputNome.value,
            emailUsuario: inputEmail.value,
            senhaUsuario: inputSenha.value,
            cpfUsuario: inputCPF.value,
            enderecoUsuario: inputEndereco.value,
            cepUsuario: inputCEP.value,
            telefoneUsuario: inputTelefone.value,
            pontos: 2000
        }
        listaUsuario.push(usuario)

        setTimeout(function(){
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
        }, 5000);
        return false;
    }
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = "Você inseriu a senha ou o email errado";
    setTimeout(function(){
      msgStatus.innerText = "";
      msgStatus.removeAttribute("class","erro")
      },5000)
        return false;
    }

    let btnLoginUp = document.getElementById("button-loginTop")
    let btnCadastro = document.getElementById("button-cadastroDown")
    let divCadastro = document.getElementById("divCadastro")
    let divLogin = document.getElementById("divLogin")

    btnLoginUp.addEventListener("click",function(){
      if(divLogin.classList.contains("none")){
        divLogin.classList.remove("none")
        divCadastro.classList.add("none")
      }
    })
    btnCadastro.addEventListener("click", function(){
      if(divCadastro.classList.contains("none")){
        divCadastro.classList.remove("none")
        divLogin.classList.add("none")
      }
    })
