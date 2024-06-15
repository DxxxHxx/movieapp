import axios from "axios";

const config = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
  },
};
export const getTrendingMovies = async () => {
  return await axios
    .get("https://api.themoviedb.org/3/trending/movie/day?language=ko", config)
    .then((res) => res.data.results)
    .catch((e) => console.log(e));
};

export const getMovieByGenreId = async (id: number) => {
  return (
    await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=ko&page=1&sort_by=popularity.desc&with_genres=${id}`,
      config
    )
  ).data.results;
};
