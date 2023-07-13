import {useEffect} from "react";
import {carsService} from "../services/carsService";

const deleteCar = (setCar,id) => {

            carsService.deleteCar(id).then(value => {
                setCar(prew => prew.filter(value => value.id !== id))
            }).catch(e =>{
                console.log(e.message)
            })
}

export { deleteCar }
