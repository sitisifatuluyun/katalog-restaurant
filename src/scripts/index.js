import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('.header__menu'); // Memilih tombol hamburger dengan kelas header__menu
const hero = document.querySelector('.hero');
const main = document.querySelector('main'); // Memilih elemen main
const drawer = document.querySelector('#drawer'); // Memilih elemen navigasi dengan id drawer

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});
