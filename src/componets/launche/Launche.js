import React from 'react';

import { HandlingError } from "../../hok";

const Launche = ({ launche }) => {

    const { launchYear, missionName, patch } = launche;

    const jsx = <div> Щось пішло не так </div>


    return (
        <HandlingError jsxElement={ jsx }>
            <div>
                <h2> launch Year : { launchYear } mission Name : { missionName }</h2>
                <img src={ patch } alt={ missionName }/>
            </div>
        </HandlingError>

    );
};

export { Launche };
