import axios from "axios";

const getMovies = async () => {
  const { data: movies } = await axios.get("http://localhost:5000/movies");
  return movies;
};

export default getMovies;