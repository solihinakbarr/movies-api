import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "b39d39acd56fe74228b3274fdc53c7da";

export const getMovies = async () => {
  const response = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}`
  );
  console.log({ Movies: response.data.results });
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  console.log({ MovieDetails: response.data });
  return response.data;
};

export const getComingSoonMovies = async () => {
  const response = await axios.get(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}`
  );
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}`
  );
  console.log({ TopRatedMovies: response.data.results });
  return response.data.results;
};
