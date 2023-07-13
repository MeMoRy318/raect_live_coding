import axios from "axios";
import {baseURL} from "../configs/baseUrls";

const axiosService = axios.create({baseURL})

export { axiosService }
