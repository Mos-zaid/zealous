
/*================== JS IMPORTS ===================== */
// Jquery
// import JQuery from "./jQuery.js"
// import HeroSlider from "./modules/HeroSlider"

// Instantiate a new object using our modules/classes
// var jquery = new JQuery()
// var heroSlider = new HeroSlider()


// Jquery
// OWL carousel
// Lazy sizes
// Scripts




/*================== MOBILE SIDEBAR ===================== */
// 1 ELEMENT
let hamburgerIcon = document.querySelector("#hamburgerIcon")
let sideBar = document.querySelector("#sideBar")
let flexContainer = document.querySelector("#flexContainer")
let closeButton = document.querySelector("#closeButton")



//  2 EVENT
hamburgerIcon.addEventListener("click", toggleMobileMenu)
closeButton.addEventListener("click", closeMenu)


// 3 ACTION
function toggleMobileMenu(){
  sideBar.classList.remove("d-none");
  sideBar.classList.add("p-fixed", "width-100", "height-100vh");
  flexContainer.classList.remove("d-flex");
  flexContainer.classList.add("d-inline-block");
}

function closeMenu(){
  sideBar.classList.add("d-none");
  sideBar.classList.remove("p-fixed", "width-100", "height-100vh");
  flexContainer.classList.add("d-flex");
  flexContainer.classList.remove("d-inline-block");

}



/*================== MOBILE MENU ===================== */
// 1 ELEMENT
// let hamburgerIcon = document.querySelector(".hamburger-script")
// let mobileNav = document.querySelector(".mobile-nav-script")
// let mobileNavShowing = false


//  2 EVENT
// hamburgerIcon.addEventListener("click", toggleMobileMenu)


// // 3 ACTION
// function toggleMobileMenu(){
//   // mobileMenu.classList.toggle("site-header__nav-links__is-active");
//   if(mobileNavShowing){
//     // Add the initial values
//     mobileNav.classList.add("d-none");
//     // Remove the Mobile Classes
//     mobileNavShowing = false
//   }else{
//     // Remove the initial values
//     mobileNav.classList.remove("d-none");
//     // Add the Mobile Classes
//     mobileNavShowing = true
//   }
// }


