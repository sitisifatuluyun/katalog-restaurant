import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
 
const Upcoming = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },
 
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestoDetailTemplate(movie);
    });
  },
};
 
export default Upcoming;