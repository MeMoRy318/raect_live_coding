import React, {useContext} from 'react';
import {CarContext} from "../../hok/CarContext";

const Car = ({ car, carDelete,setCar,setCars }) => {
    const {id,brand,year,price} = car;

    return (
        <ul>
            <li>ID: {id}</li>
            <li>BRAND: {brand}</li>
            <li>YEAR: {year}</li>
            <li>PRICE: {price}</li>
            <button onClick={()=> carDelete(id)}> Delete car</button>
            <button onClick={()=> setCar({...car,setCars})}> Update car</button>
        </ul>
    );
};

export {Car};
