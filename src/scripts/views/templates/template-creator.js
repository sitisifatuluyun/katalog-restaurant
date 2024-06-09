import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="restaurant__title">${resto.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Nama Restaurant</h4>
    <p>${resto.name}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Detail Makanan</h4>
      <p>${resto.menus.foods.map((food) => `${food.name}`).join(', ')}</p>
    <h4>Detail Minuman</h4>
      <p>${resto.menus.drinks.map((drink) => `${drink.name}`).join(', ')}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>

  <div class="restaurant__overview">
  <h3>Customer Reviews</h3>
    ${resto.customerReviews.map((review) => `
        <p>"${review.review}" - ${review.name}</p>
        <p class="date-review">${review.date}</p><br>
    `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${resto.name}"
           src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = () => `
  <section class="input_section">
    <h3>Review Resto ini</h3>
    <form action="" method="post" id="addReview" class="form-review">
        <div class="input">
            <label for="nama">Nama</label>
            <input type="text" name="nama" id="formNama" class="form-input" required><br>
        </div>
        <div class="input">
            <label for="review">Review</label>
            <input type="text" name="review" id="formReview" class="form-input" required>
        </div>
        <button type="submit" id="submit">Kirim</button>
    </form>
  </section>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
