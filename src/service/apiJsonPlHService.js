import axios from "axios";
import {baseURLS} from "../constans/urls";

const apiJsonPlHService = axios.create({baseURL:baseURLS.jsonPlH})

export { apiJsonPlHService }
