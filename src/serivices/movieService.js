import {instanceAxios} from "./apiService";
import {urls} from "../configs/urls";

export const movieService = {
  getAll: (params) => instanceAxios.get(urls.movie.base,{params:{...params}}),
  getMovieById: (id) => instanceAxios.get(urls.movie.byId(id))
}
