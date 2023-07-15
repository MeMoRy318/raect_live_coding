import React, {useContext, useMemo} from 'react';
import {useCars} from "../../myCustomHook/useCars";
import {Car} from "../Car/Car";
import {CarContext} from "../../hok/CarContext";

const Cars = () => {
    const {carDelete,cars,setCars} = useCars();
    const {car:_car,setCar} = useContext(CarContext)


    return (
        <div>
            {!!cars?.length && [...cars].map(value => <Car key={value.id} car={value} carDelete={carDelete} setCar={setCar} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};
