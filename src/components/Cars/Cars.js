import React from 'react';
import {useCars} from "../../myCustomHook/useCars";
import {Car} from "../Car/Car";

const Cars = () => {
    const {carDelete,cars,setCars} = useCars();

    return (
        <div>
            {!!cars?.length && [...cars].map(value => <Car key={value.id} car={value} carDelete={carDelete}/>)}
        </div>
    );
};

export {Cars};
