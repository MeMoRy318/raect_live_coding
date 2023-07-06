import React from 'react';

const HandlingError = ({ jsxElement, children }) => {


    try {
       if (!children){
           throw new Error('asd')
       }
        return ( children )
    }catch (e) {
        return ( jsxElement )
    }

};

export { HandlingError };
