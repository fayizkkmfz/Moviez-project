export const imageUrl = "https://image.tmdb.org/t/p/original";
export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";

// export const comedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const latestMovies = "http://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f";
// export const popularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;




const genre_id_1 = "28";
const genre_id_2 = "53";
const genre_id_3 = "35";
const genre_id_4 = "10752";

export const Action_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_1}&language=en-US`;
export const Thriller_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_2}&language=en-US`;
export const Comedy_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_3}&language=en-US`;
export const War_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_4}&language=en-US`;




// export const Omdb='https://omdbapi.com/?s=s&apikey=c27daa32'
// export const test="https://freetestapi.com/api/v1/movies "