//https://www.omdbapi.com/?apikey=22445f5&

const API_URL = "https://www.omdbapi.com/?apikey=22445f5&i=tt3896198";

const fetchMovies = async (params = "") =>
  await fetch(params ? `${API_URL}&${params}` : API_URL);

export default fetchMovies;

// https://www.omdbapi.com/?apikey=22445f5&i=tt3896198
