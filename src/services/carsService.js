import {axiosService} from "./axiosService";
import {carsUrls} from "../configs/carsUrls";

const carsService = {
    getAllCars: () => axiosService.get(carsUrls.cars),
    getCarById: (id) => axiosService.get(carsUrls.carsId(id)),
    createCar: (data) => axiosService.post(carsUrls.cars,data),
    updateCar: (id,data) => axiosService.put(carsUrls.carsId(id),data),
    deleteCar: (id) => axiosService.delete(carsUrls.carsId(id))
}

export { carsService }
