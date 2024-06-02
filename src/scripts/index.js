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

fetch('../data/DATA.json')
.then(response => response.json())
.then(data => {
  const restaurantList = document.getElementById('restaurant-list');

  // Iterasi setiap restoran dalam data JSON
  data.restaurants.forEach(restaurant => {
    // Membuat elemen untuk setiap restoran
    const restaurantElement = document.createElement('div');
    restaurantElement.classList.add('restaurant');

    // Menambahkan nama restoran
    const nameElement = document.createElement('h2');
    nameElement.textContent = restaurant.name;
    restaurantElement.appendChild(nameElement);

    // Menambahkan gambar restoran
    const imageElement = document.createElement('img');
    imageElement.src = restaurant.pictureId;
    imageElement.alt = restaurant.name;
    restaurantElement.appendChild(imageElement);

    // Menambahkan deskripsi restoran
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = restaurant.description;
    descriptionElement.classList.add('description');
    restaurantElement.appendChild(descriptionElement);

    // Menambahkan rating restoran
    const ratingElement = document.createElement('p');
    const stars = '★'.repeat(Math.round(restaurant.rating));
    ratingElement.innerHTML = `Rating: <span class="rating">${stars}</span>`;
    restaurantElement.appendChild(ratingElement);

    // Menambahkan restoran ke daftar restoran
    restaurantList.appendChild(restaurantElement);
  });
})
.catch(error => console.error('Error loading restaurant data:', error));