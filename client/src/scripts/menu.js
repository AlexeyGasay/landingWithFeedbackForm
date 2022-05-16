// HEADER MENU 

let burger = document.getElementById("burger");
let menu = document.getElementById("header__menu_block");

let menuState = false;

function showMenu() {
  menuState = true;

  if ( menuState ) 
  {
    menu.classList = `header__menu_block show_menu`
  }
}

function hideMenu() {
  menuState = false;

  if  (menuState == false ) 
  {
    menu.classList = `header__menu_block hide_menu`
  }
}

burger.addEventListener('click', showMenu);
menu.addEventListener('click', hideMenu);



// STICKY MENU

window.onscroll = function () { stickMenu() };

let header = document.getElementById("header_nav");

let sticky = header.offsetTop;

function stickMenu() {
  if ( window.pageYOffset >= sticky ) 
  {
    header.classList.add("sticky");
  }
  else header.classList.remove("sticky");

}























