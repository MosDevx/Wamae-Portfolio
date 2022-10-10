const menuBars = document.querySelector('.menu-bars');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.mobile-nav');
const linkItems = document.querySelectorAll('.linkItem');

menuBars.addEventListener('click', () => {
  menuBars.classList.toggle('hide-element');
  menuClose.classList.toggle('hide-element');
  navMenu.classList.toggle('show-mobile-nav');
});

menuClose.addEventListener('click', () => {
  menuBars.classList.toggle('hide-element');
  menuClose.classList.toggle('hide-element');
  navMenu.classList.toggle('show-mobile-nav');
});

for (let i = 0; i < linkItems.length; i += 1) {
  linkItems[i].addEventListener('click', () => {
    navMenu.classList.remove('show-mobile-nav');
    menuClose.classList.toggle('hide-element');
    menuBars.classList.toggle('hide-element');
  });
}