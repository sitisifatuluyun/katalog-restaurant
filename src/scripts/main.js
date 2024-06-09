const menu = document.getElementById('menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.getElementById('drawer');

menu.addEventListener('click', (e) => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

