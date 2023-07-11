import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite, city, zipcode} = address;
    return (
        <div>
            <p>Address</p>
            <ul>
                <li><strong>STREET:</strong>{street}</li>
                <li><strong>SUITE:</strong>{suite}</li>
                <li><strong>CITY:</strong>{city}</li>
                <li><strong>ZIP CODE:</strong>{zipcode}</li>
            </ul>
        </div>
    );
};

export {UserAddress}
