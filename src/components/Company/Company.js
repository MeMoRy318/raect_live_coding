import React from 'react';

const Company = ({company}) => {
    const {name,catchPhrase,bs} = company;
    return (
        <div>
            <p>Company</p>
            <ul>
                <li><strong>NAME:</strong> {name}</li>
                <li><strong>CATHC PHRASE</strong>{catchPhrase}</li>
                <li><strong>BS:</strong>{bs}</li>
            </ul>
        </div>

    );
};

export {Company}
