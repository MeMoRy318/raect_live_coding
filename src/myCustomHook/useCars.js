import {useEffect, useState} from "react";
import {carsService} from "../services/carsService";
import {deleteCar} from "../utility/deleteCar";

export const useCars = () => {
    const [cars,setCars] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState('')


    useEffect(()=>{
        setIsLoading(!isLoading);
        carsService.getAllCars().then(({data}) => {
            setCars(data)
        },error =>setIsError(error.message) ).finally(() =>{
            setIsLoading(!isLoading);
        } )
    },[])

   const carDelete = deleteCar.bind(null,setCars)
    return {cars,setCars,carDelete,isLoading,isError}
}

