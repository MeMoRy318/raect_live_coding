import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjkyNjM0YTc1YmMyZTQ3OTM4MTVkZWY4MDZjY2QyNCIsInN1YiI6IjYyZTNmNWVlZjA2NDdjMDA1YTcwYTg3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.czOJOuIjceNFLFbA_U4xlGMOFpL5zB8-UJ6bTmCcTxA"

const instanceAxios = axios.create({baseURL});

instanceAxios.interceptors.request.use(function (config) {
   config.headers.Authorization = `Bearer ${API_TOKEN}`;
   return config;
})

export {
    instanceAxios
}

