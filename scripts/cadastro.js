let listaUsuario = [
    {
      nome: "Gustavo Dias",
      emailUsuario: "gd@email.com",
      senhaUsuario: "123456",
      cpf:"123.123.123-11",
      endereco: "Rua são joaquin",
      cep: "12345-123",
      telefone: "11 12345-1234"
    },
    {
      nome: "Felipe Ribeiro",
      emailUsuario: "fr@email.com",
      senhaUsuario: "123456",
      cpf:"123.123.123-11",
      endereco: "Rua são joaquin",
      cep: "12345-123",
      telefone: "11 12345-1234"
    },
    {
      nome: "Enrico Del Guerra",
      emailUsuario: "ed@email.com",
      senhaUsuario: "123456",
      cpfUsuario:"123.123.123-11",
      enderecoUsuario: "Rua são joaquin",
      cepUsuario: "12345-123",
      telefoneUsuario: "11 12345-1234"
    },
  ];

  function validar(inputEmail, inputSenha) {
  
    
    let msgStatus = document.querySelector(".valida");
    
    for (let x = 0; x < listaUsuario.length; x++) {
        
        if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
          
            msgStatus.setAttribute("class","sucesso");
            msgStatus.innerText = "Login realizado com sucesso!";
    
            
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuario[x]));
            
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

    if(inputSenha.value == inputSenhaAux.value){
        msgStatus.setAttribute("class","sucesso");
        msgStatus.innerText = "Cadastro realizado com sucesso!";

        user = 
            {
            nome: inputNome.value,
            emailUsuario: inputEmail.value,
            senhaUsuario: inputSenha.value,
            cpfUsuario: inputCPF.value,
            enderecoUsuario: inputEndereco.value,
            cepUsuario: inputCEP.value,
            telefoneUsuario: inputTelefone.value
        }
        listaUsuario.push(user)

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
