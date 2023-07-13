import React from 'react';

const Car = ({ car, carDelete }) => {
    const {id,brand,year,price} = car;
    return (
        <ul>
            <li>ID: {id}</li>
            <li>BRAND: {brand}</li>
            <li>YEAR: {year}</li>
            <li>PRICE: {price}</li>
            {/*<button onClick={()=> }> </button>*/}
        </ul>
    );
};

export {Car};
