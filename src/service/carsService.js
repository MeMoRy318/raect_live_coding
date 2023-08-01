import {apiCarsService} from "./apiCarsService";
import {urls} from "../constans/urls";

const carsService = {
    getAll: () => apiCarsService.get(urls.cars.base)
}

export { carsService }
