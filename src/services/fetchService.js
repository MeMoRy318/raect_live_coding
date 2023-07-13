import { MyFetch } from "../utility";
import {baseURL} from "../configs";

const fetchService = new MyFetch()

fetchService.create({ baseURL })

export { fetchService }
