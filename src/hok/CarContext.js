import React, {createContext, useState} from 'react';

export const CarContext = createContext(null)

const CarContextJSX = ({children}) => {

    const [car,setCar] = useState(false)

    return (
        <CarContext.Provider value={{car,setCar}}>
            {children}
        </CarContext.Provider>
    );
};

export {CarContextJSX};
