import React from 'react';

const Car = ({cars}) => {
    const {id,brand,year} = cars;

    return (
      <>
          <li>ID: {id}</li>
          <li>BRAND: {brand}</li>
          <li>BRAND: {year}</li>
      </>
    );
};

export {Car};
