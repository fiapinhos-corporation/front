const menuMobileBtn = document.querySelector(".btn-mobile");
const header = document.querySelector('header')
const closeMenuMobile = document.getElementById('close-menu-mobile')

menuMobileBtn.addEventListener("click", () => {
  openOrCloseMobileMenu()
});



function openOrCloseMobileMenu() {
  const mobileMenu = document.querySelector(".nav-mobile");
  if (!mobileMenu.classList.contains("open-nav-mobile")) {
    mobileMenu.classList.add("open-nav-mobile");
    menuMobileBtn.classList.add("rotate-img")
    header.classList.add("fundo-azul")
    header.classList.add("header-column")
    // header.classList.add('resize-header')
    // if(header.classList.contains('h-transparent')){
    //     header.classList.remove('h-transparent')
    //     header.classList.add('h-transparent-resized')
    // }
    // let heros = document.querySelectorAll(".hero-transparent")
    // let acc = 0
    // if(!heros === null || heros === undefined || heros === ""){
    //     heros.forEach((item)=>{
    //         if(acc === 0){
    //             item.classList.remove(".hero-transparent")
    //             item.classList.add(".hero-transparent-resized")
    //         }
    //         acc++;
    //     })
    // }
  }
  else{
    mobileMenu.classList.remove("open-nav-mobile")
    menuMobileBtn.classList.remove("rotate-img")
    header.classList.remove("fundo-azul")
    header.classList.remove("header-column")


    // header.classList.remove('resize-header')
    
    // if(header.classList.contains('h-transparent-resized')){
    //     header.classList.remove('h-transparent-resized')
    //     header.classList.add('h-transparent')
    // }
    // let heroResized = document.querySelector(".hero-transparent-resized")
    // if(!heroResized === null || heroResized === undefined || heroResized === ""){
    //     heroResized.classList.remove("hero-transparent-resized")
    //     heroResized.classList.add("hero-transparent")
    // }

  }
}


