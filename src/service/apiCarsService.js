import axios from "axios";
import {baseURLS} from "../constans/urls";

const apiCarsService = axios.create({baseURL:baseURLS.cars})

export { apiCarsService }
