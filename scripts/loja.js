let itens = [
  {
    id: 1,
    nome: "Cafeteira",
    pontos: 100,
    image: "../assets/images/cafeteira.webp",
    tipo: "eletrodomestico",
  },
  {
    id: 2,
    nome: "Cafeteira",
    pontos: 200,
    image: "../assets/images/cafeteira.webp",
    tipo: "outros",
  },
  {
    id: 3,
    nome: "Cafeteira",
    pontos: 300,
    image: "../assets/images/cafeteira.webp",
    tipo: "livros",
  },
  {
    id: 4,
    nome: "Cafeteira",
    pontos: 400,
    image: "../assets/images/cafeteira.webp",
    tipo: "eletronicos",
  },
  {
    id: 5,
    nome: "Pao de Queijo",
    pontos: 400,
    image: "../assets/images/cafeteira.webp",
    tipo: "eletronicos",
  },
];

const containerItens = document.querySelector(".container-itens");

itens.map((item) => {
  const card = document.createElement("div");
  card.classList.add("card-item");
  const nomeItemHTML = document.createElement("p");
  nomeItemHTML.classList.add("nome-item");
  const imagemItemHTML = document.createElement("img");
  const pontosHTML = document.createElement("p");
  pontosHTML.classList.add("pontos-item");
  const resgatarBtn = document.createElement("button");
  resgatarBtn.textContent = "Resgatar";
  resgatarBtn.setAttribute("id", `resgatar-btn-${item.id}`)
  card.setAttribute("id", `${item.id}`)

  nomeItemHTML.textContent = item.nome;
  imagemItemHTML.src = item.image;
  pontosHTML.textContent = `Pontos : ${item.pontos}`;

  if (item.image.length === 0) {
    imagemItemHTML.src = "https://via.placeholder.com/150";
  }
  card.insertAdjacentElement("afterbegin", nomeItemHTML);
  card.insertAdjacentElement("beforeend", imagemItemHTML);
  card.insertAdjacentElement("beforeend", pontosHTML);
  card.insertAdjacentElement("beforeend", resgatarBtn);
  containerItens.insertAdjacentElement("beforeend", card);
});
const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase();
  const valorBusca = searchInput.value;
  const containerItens = document.querySelector(".container-itens");
  const cards = containerItens.querySelectorAll(".card-item");
  let showedItems = 0;
  let listaItens = containerItens.childNodes;
  // if (listaItens.length > 0) {
  //     containerItens.removeChild(listaItens[0]);
  // }
  //console.log(containerItens.childNodes)

  cards.forEach((card) => {
    const nomeItem = card.firstChild.textContent.toUpperCase();
    if (!nomeItem.includes(valorBusca)) {
      card.classList.add("close-item");
    }

    if (valorBusca === "" || nomeItem.includes(valorBusca)) {
      card.classList.remove("close-item");
    }
  });
  cards.forEach((card) => {
    if (!card.classList.contains("close-item")) {
      showedItems++;
    }
  });
  const footer = document.querySelector("footer");
  const searchCategory = document.querySelector("#search-category");

  if (showedItems == 0) {
    footer.classList.add("resize-position");
    searchCategory.classList.add("resize-search-category");
  } else if (footer.classList.contains("resize-position")) {
    footer.classList.remove("resize-position");
  } else if (searchCategory.classList.contains("resize-search-category")) {
    searchCategory.classList.remove("resize-search-category");
  }
});
var nomeUserHTML = document.getElementById("nome-user-loja");
var pontosUserHTML = document.getElementById("pontos-user-loja");
let usuario = JSON.parse(localStorage.getItem("usuario"));

nomeUserHTML.innerText = usuario.nome;
pontosUserHTML.innerText = `Pontos: ${usuario.pontos}`;

const resgatar = document.querySelectorAll(".card-item button");

let botoesRegistrar = []

let item1 = document.querySelector('#resgatar-btn-1')
let item2 = document.querySelector('#resgatar-btn-2')
let item3 = document.querySelector('#resgatar-btn-3')
let item4 = document.querySelector('#resgatar-btn-4')
let item5 = document.querySelector('#resgatar-btn-5')

// item1.addEventListener("click", (item)=>{
//   console.log("to funfando")
//   console.log(item.target.parentNode.id)
// })

// for(var i in itens.length){
//   console.log(i)
//   document.querySelector(`#registrar-btn-${[i]}`).addEventListener("click", (e)=>{
//     console.log(e.target.parentNode.querySelector('.pontos-item'))
//   })
// }
resgatar.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    console.log(e.target)
    let pontosNecessarios = e.target.parentNode.querySelector(".pontos-item");
    console.log(pontosNecessarios.textContent)
    let valorPontos = pontosNecessarios.textContent.split(":")[1].trim();
    usuario.pontos-=valorPontos;
    alert(`Você comprou ${item.parentElement.firstChild.textContent}`)
    pontosUserHTML.innerText = `Pontos: ${usuario.pontos}`;
    localStorage.setItem("usuario", JSON.stringify(usuario))
    console.log(usuario.pontos)

  })
})

if(screen.width <= 767){
  const botaoPesquisa = document.getElementById("#search-btn")
  
}



//usuario.pontos -=


// resgatar.forEach((this) => {
//   this.addEventListener("click", (item) => {
//     console.log(item.target.parentNode);
//     item.target.parentNode.setAttribute("id", "item-clicado");
//     let pontosItemCard = document.querySelector(`#item-clicado .pontos-item`);
//     item.target.parentNode.removeAttribute("id");
//     console.log(pontosItemCard.textContent);
//   });

// });

// resgatar.forEach((this)=>{
//   // this.addEventListener("click", (item)=>{
//   //   console.log(item.target.parentNode);
//   //   // item.target.parentNode.setAttribute("id", "item-clicado");
//   //   // let pontosItemCard = document.querySelector(`#item-clicado .pontos-item`);
//   //   // item.target.parentNode.removeAttribute("id");
//   //   // console.log(pontosItemCard.textContent);
//   // })
// })

