import axios from 'axios';


const baseURL = 'https://jsonplaceholder.typicode.com';
export const instanceAxios = axios.create({ baseURL })


