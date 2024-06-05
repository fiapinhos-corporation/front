let itens = [
  {
    nome: "Cafeteira",
    pontos: 10.99,
    image: "../assets/images/cafeteira.webp",
    tipo: "eletrodomestico",
  },
  {
    nome: "Cafeteira",
    pontos: 20.99,
    image: "",
    tipo: "outros",
  },
  {
    nome: "Cafeteira",
    pontos: 30.99,
    image: "../assets/images/cafeteira.webp",
    tipo: "livros",
  },
  {
    nome: "Cafeteira",
    pontos: 40.99,
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
  const searchCategory = document.querySelector('#search-category');

  if (showedItems == 0) {
    footer.classList.add("resize-position");
    searchCategory.classList.add("resize-search-category");
  } else if (footer.classList.contains("resize-position")) {
    footer.classList.remove("resize-position");
  } else if (searchCategory.classList.contains("resize-search-category")){
    searchCategory.classList.remove("resize-search-category");
  }
  
});

// window.addEventListener("load", adjustFooterPosition);
// window.addEventListener("resize", adjustFooterPosition);

// function adjustFooterPosition() {
//   const footer = document.querySelector("footer");
//   const body = document.body;
//   const html = document.documentElement;
//   const main = document.querySelector(".container-itens");
//   let mainHeight = Math.max(main.clientHeight, main.scrollHeight);

//   let pageHeight = Math.max(
//     body.scrollHeight,
//     body.offsetHeight,
//     html.clientHeight,
//     html.scrollHeight,
//     html.offsetHeight
//   );
//   let viewportHeight = window.innerHeight;
//   let showedItems = 0;
//   let items = document.querySelectorAll(".card-item");
//   items.forEach((item) => {
//     if (!item.classList.contains("close-item")) {
//       showedItems += 1;
//     }
//   });
//   console.log(main.children.length);
//   if (showedItems < 1) {
//     footer.classList.add("resize-position");
//   } else if (footer.classList.contains("resize-position")) {
//     footer.classList.remove("resize-position");
//   }
// }
