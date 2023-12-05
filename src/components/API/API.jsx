const URL = 'https://api.themoviedb.org/3/';
const KEY = '100715b38ecee48372fe7db22d34203d';

export function getTrending() {
  return fetch(`${URL}trending/movie/day?api_key=${KEY}`)
    .then(response => response.json())
    .then(data => data.results);
}

export function getSearch(query) {
  return fetch(`${URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
    .then(response => response.json())
    .then(data => data.results);
}

export function getDetails(movieId) {
  return fetch(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(response => response.json());
}

export function getCredits(movieId) {
  return fetch(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => data.cast);
}

export function getReviews(movieId) {
  return fetch(`${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}