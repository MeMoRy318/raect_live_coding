import {useEffect, useState} from "react";
import {carsService} from "../services/carsService";
import {deleteCar} from "../utility/deleteCar";

export const useCars = () => {
    const [cars,setCars] = useState([])

    useEffect(()=>{
        carsService.getAllCars().then(({data}) => setCars(data))
    },[])

   const carDelete = deleteCar.bind(setCars)
    return {cars,setCars,carDelete}
}

