import { useEffect, useState } from "react";

import { spacexService } from "../services";
import { filterSpacex, mapSpacexArray } from "../utility";

const useSpacex = () => {

   const [ spacex,setSpacex ] = useState([])

    useEffect(()=>{
        spacexService.getAllSpacex().then(({ data }) => {
            const changesSpacex = filterSpacex( data )
            setSpacex( mapSpacexArray( changesSpacex ) )
        })
    },[])

    return [ [...spacex], setSpacex ];
};

export { useSpacex };
