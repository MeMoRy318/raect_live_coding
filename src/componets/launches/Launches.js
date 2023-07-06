import React from 'react';

import { useSpacex } from "../../myCustomHooks";
import { Launche } from "../launche/Launche";

const Launches = () => {

    const [ spacex, setSpacex ] = useSpacex()

    return (
        <div>
            {!!spacex?.length &&
                spacex.map( value =>
                    <Launche
                        key={ value.id }
                        launche = { value }
                  />)}
        </div>
    );
};

export { Launches };
